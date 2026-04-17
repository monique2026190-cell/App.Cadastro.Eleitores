
import { Router } from 'express';
import { logMessage, logBatchMessages } from '../controllers/controlador.log.js';

const router = Router();

// Rota existente para logs individuais (fallback)
router.post('/log', logMessage);

// Nova e principal rota para receber logs em lote
router.post('/logs', logBatchMessages);

export default router;
