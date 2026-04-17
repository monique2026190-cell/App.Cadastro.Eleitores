
// frontend/logs/log.worker.ts

interface LogPayload {
  level: 'info' | 'warn' | 'error';
  msg: string;
  [key: string]: any;
}

// --- Configurações --- 
const DB_NAME = 'logDB';
const STORE_NAME = 'logs';
const DB_VERSION = 1;
const BATCH_INTERVAL = 10000;      // Tenta enviar a cada 10 segundos
const MAX_BATCH_SIZE = 100;        // Envia no máximo 100 logs por vez
const MAX_DB_SIZE = 5000;          // Mantém no máximo 5000 logs no DB
const INITIAL_RETRY_DELAY = 1000;  // 1 segundo
const MAX_RETRY_DELAY = 60000;     // 1 minuto

// --- Estado do Worker ---
let db: IDBDatabase;
let isProcessing = false;
let retryDelay = INITIAL_RETRY_DELAY;

// --- Funções Auxiliares ---
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

// --- Lógica de Banco de Dados (IndexedDB) ---

const initDB = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(new Error('Worker: Falha ao abrir IndexedDB.'));
    request.onsuccess = () => {
      db = request.result;
      resolve();
    };
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { autoIncrement: true });
      }
    };
  });
};

const dbReadyPromise = initDB();

const addLogToDB = async (log: LogPayload) => {
  await dbReadyPromise;
  try {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.add(log);
    // Aplica o limite de tamanho
    cullDB(store);
  } catch (error) {
    console.error('Worker: Falha ao adicionar log ao DB', error);
  }
};

const cullDB = (store: IDBObjectStore) => {
    const countRequest = store.count();
    countRequest.onsuccess = () => {
        const count = countRequest.result;
        if (count > MAX_DB_SIZE) {
            const toDelete = count - MAX_DB_SIZE;
            let deleted = 0;
            const cursorRequest = store.openCursor();
            cursorRequest.onsuccess = e => {
                const cursor = (e.target as IDBRequest<IDBCursor>).result;
                if(cursor && deleted < toDelete) {
                    cursor.delete();
                    deleted++;
                    cursor.continue();
                }
            }
        }
    }
}

// --- Lógica de Processamento da Fila ---

const processLogQueue = async () => {
  if (isProcessing) return;
  isProcessing = true;

  try {
    await dbReadyPromise;
    if (!db) throw new Error("DB não está disponível.");

    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const keysToDelete: IDBValidKey[] = [];
    const logsToSend: LogPayload[] = [];

    const cursorRequest = store.openCursor();

    const logs = await new Promise<LogPayload[]>((resolve) => {
      cursorRequest.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor && logsToSend.length < MAX_BATCH_SIZE) {
          logsToSend.push(cursor.value);
          keysToDelete.push(cursor.primaryKey);
          cursor.continue();
        } else {
          resolve(logsToSend);
        }
      };
      cursorRequest.onerror = () => resolve([]); // Retorna array vazio em caso de erro
    });

    if (logs.length > 0) {
      const response = await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logs),
        keepalive: true
      });

      if (!response.ok) throw new Error(`Status da resposta: ${response.status}`);
      
      // Limpa os logs enviados com sucesso do DB
      const deleteTransaction = db.transaction([STORE_NAME], 'readwrite');
      const deleteStore = deleteTransaction.objectStore(STORE_NAME);
      for (const key of keysToDelete) {
        deleteStore.delete(key);
      }
      
      // Reset o delay de retry após um envio bem-sucedido
      retryDelay = INITIAL_RETRY_DELAY;
    }

  } catch (error) {
    console.error('Worker: Falha ao enviar logs. Tentando novamente mais tarde.', error);
    // Lógica de backoff exponencial
    await sleep(retryDelay);
    retryDelay = Math.min(retryDelay * 2, MAX_RETRY_DELAY);
  } finally {
    isProcessing = false;
  }
};

// --- Lógica Principal do Worker ---

self.onmessage = (event: MessageEvent<LogPayload>) => {
  addLogToDB(event.data);
};

dbReadyPromise.then(() => {
  console.log('Worker: Logger DB inicializado. Pronto para receber logs.');
  // Processa a fila em intervalos, mas de forma segura
  setInterval(processLogQueue, BATCH_INTERVAL);
  // Processa imediatamente se voltarmos a ficar online (ainda útil como gatilho extra)
  self.addEventListener('online', processLogQueue);
}).catch(err => {
    console.error("Worker: Falha CRÍTICA ao inicializar o logger DB.", err)
});
