
// frontend/logs/app.log.ts

type LogLevel = 'info' | 'warn' | 'error';

// Uma pequena abstração para interagir com o worker
const createLogWorker = () => {
  if (window.Worker) {
    // O `?url` é uma sintaxe específica do Vite para importar o worker
    const worker = new Worker(new URL('./log.worker.ts', import.meta.url), { type: 'module' });
    
    return {
      post: (level: LogLevel, msg: string, meta?: Record<string, any>) => {
        const payload = {
          level,
          msg,
          timestamp: new Date().toISOString(),
          ...meta
        };
        worker.postMessage(payload);
      },
      terminate: () => worker.terminate()
    };
  } else {
    // Fallback MUITO simples se o navegador não suportar workers.
    // A implementação anterior com axios caberia aqui como um bom fallback.
    console.warn("Web Workers não são suportados. O logging avançado está desabilitado.");
    return {
      post: (level: LogLevel, msg: string, meta?: Record<string, any>) => {
        console[level]({ msg, ...meta });
      },
      terminate: () => {}
    };
  }
};

const logWorker = createLogWorker();

// O logger agora é apenas uma fachada para o worker
export const logger = {
  info: (message: string, meta?: Record<string, any>) => {
    logWorker.post('info', message, meta);
    // Log no console em dev para facilitar o debug instantâneo
    if (import.meta.env.MODE === 'development') {
      console.info(`[Log INFO]: ${message}`, meta || '');
    }
  },

  warn: (message: string, meta?: Record<string, any>) => {
    logWorker.post('warn', message, meta);
    if (import.meta.env.MODE === 'development') {
      console.warn(`[Log WARN]: ${message}`, meta || '');
    }
  },

  error: (message: string, meta?: Record<string, any>) => {
    logWorker.post('error', message, meta);
    if (import.meta.env.MODE === 'development') {
      console.error(`[Log ERROR]: ${message}`, meta || '');
    }
  },
};

// Opcional: Limpar o worker quando a aplicação fechar
window.addEventListener('beforeunload', () => {
  logWorker.terminate();
});
