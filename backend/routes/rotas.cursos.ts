import { Router } from 'express';
import { getCursos } from '../controllers/controlador.cursos.js';
import { authMiddleware } from '../middleware/middleware.autenticacao.js';

const router = Router();

/**
 * @swagger
 * /api/cursos:
 *   get:
 *     summary: Retorna todos os cursos
 *     responses:
 *       200:
 *         description: Lista de cursos
 */
router.get('/api/cursos', authMiddleware, getCursos);

export default router;
