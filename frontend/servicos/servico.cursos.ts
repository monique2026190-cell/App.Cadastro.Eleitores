import api from './api';

/**
 * Busca a lista de todos os cursos disponíveis.
 * @returns A resposta da API com a lista de cursos.
 */
export const buscarCursos = () => {
  return api.get('/api/cursos');
};

/**
 * Cria um novo curso.
 * @param curso Os dados do curso a ser criado.
 * @returns A resposta da API.
 */
export const criarCurso = (curso: { nome: string; descricao: string }) => {
  return api.post('/api/cursos', curso);
};
