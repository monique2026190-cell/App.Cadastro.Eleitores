import pino from 'pino';

// A configuração do logger é definida com base no ambiente (produção vs. desenvolvimento)
let pinoOptions: pino.LoggerOptions;

if (process.env.NODE_ENV !== 'production') {
  // --- CONFIGURAÇÃO DE DESENVOLVIMENTO (com pino-pretty) ---
  pinoOptions = {
    level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
        ignore: 'pid,hostname,reqId,req,res,responseTime',
        messageFormat: (log: pino.LogDescriptor, messageKey: string): string => {
          const level = log.levelLabel || 'INFO';
          const status = log.status || log.res?.statusCode;
          const method = log.method || log.req?.method;
          const url = log.url || log.req?.url;
          const ip = log.ip || log.req?.remoteAddress;

          let msg = `[${level.toUpperCase()}]`;
          if (method) msg += ` ${method}`;
          if (url) msg += ` ${url}`;
          if (status) msg += ` | ${status}`;

          // Adiciona a mensagem principal, tratando-a como detalhe se já houver contexto (método/url)
          if (log[messageKey]) {
            msg += method || url ? ` - ${log[messageKey]}` : ` ${log[messageKey]}`;
          }

          if (log.responseTime) {
            msg += ` | ${log.responseTime}ms`;
          }
          if (ip) {
            msg += ` | IP: ${ip}`;
          }
          return msg;
        },
        customLevels: {
          http: 10,
          debug: 20,
          info: 30,
          warn: 40,
          error: 50,
          fatal: 60,
        },
        useOnlyCustomLevels: false,
        levelFirst: true,
      },
    },
    formatters: {
      level(label: string) {
        return { levelLabel: label };
      },
    },
  };
} else {
  // --- CONFIGURAÇÃO DE PRODUÇÃO (formato JSON) ---
  pinoOptions = {
    level: 'info',
    formatters: {
      // Em produção, queremos o formato de nível padrão do Pino para JSON
      level(label: string) {
        return { level: label };
      },
    },
  };
}

// Cria a instância final do logger com as opções definidas
const logger = pino(pinoOptions);

export { logger };
