
import { Request, Response } from 'express';
import { logger } from '../logs/logger.js';

// Níveis de log válidos
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const isValidLogLevel = (level: any): level is LogLevel => {
  return typeof level === 'string' && ['info', 'warn', 'error', 'debug'].includes(level);
};

/**
 * Processa um único log enviado pelo frontend.
 */
export const logMessage = (req: Request, res: Response) => {
  const { level, msg, ...rest } = req.body;

  if (!isValidLogLevel(level) || !msg) {
    logger.warn(
      { body: req.body, source: 'frontend-log-endpoint' },
      'Payload de log individual inválido recebido'
    );
    return res.status(400).send('Payload de log inválido.');
  }

  logger[level]({ ...rest, source: 'frontend' }, msg);
  res.status(200).send('Log recebido');
};

/**
 * Processa um lote (array) de logs enviado pelo frontend.
 */
export const logBatchMessages = (req: Request, res: Response) => {
  const logs = req.body;

  if (!Array.isArray(logs)) {
    logger.warn(
        { source: 'frontend-log-endpoint' },
        'Payload de log em lote não era um array.'
    );
    return res.status(400).send('Payload de logs deve ser um array.');
  }

  for (const log of logs) {
    const { level, msg, ...rest } = log;
    if (isValidLogLevel(level) && msg) {
        // Adiciona a source e loga usando o logger principal
        logger[level]({ ...rest, source: 'frontend' }, msg);
    } else {
        // Loga uma advertência para o log malformado dentro do lote
        logger.warn({ log, source: 'frontend-log-endpoint' }, 'Item de log malformado em um lote');
    }
  }

  res.status(202).send('Logs recebidos para processamento.'); // 202 Accepted é mais semântico aqui
};

