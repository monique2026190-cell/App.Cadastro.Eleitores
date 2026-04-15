
import { Router } from 'express';
import { logMessage } from '../controllers/controlador.log';

const router = Router();

router.post('/log', logMessage);

export default router;
