export const buscarCursosQuery = 'SELECT * FROM cursos;';

export const inserirCursoQuery = `
  INSERT INTO cursos (nome, descricao, criado_em, atualizado_em)
  VALUES ($1, $2, NOW(), NOW())
  RETURNING *;
`;
