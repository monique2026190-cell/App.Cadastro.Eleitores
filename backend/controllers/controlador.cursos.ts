import { Request, Response } from 'express';
import {
  buscarTodosCursos,
  inserirCurso,
} from '../repository/repositorio.cursos.js';
import { logger } from '../logs/logger.js';

/**
 * Lida com a requisição para buscar todos os cursos.
 */
export const getCursos = async (req: Request, res: Response) => {
  try {
    const cursos = await buscarTodosCursos();
    res.json(cursos);
  } catch (error) {
    logger.error({ error }, 'Erro ao buscar cursos');
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

/**
 * Lida com a requisição para criar um novo curso.
 */
export const criarCurso = async (req: Request, res: Response) => {
  try {
    const { nome, descricao } = req.body;
    const novoCurso = await inserirCurso({ nome, descricao });
    res.status(201).json(novoCurso);
  } catch (error) {
    logger.error({ error }, 'Erro ao criar curso');
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};
