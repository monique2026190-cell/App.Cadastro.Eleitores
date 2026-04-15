import { useState } from 'react';
import { criarCurso as criarCursoApi } from '../servicos/servico.cursos';

interface CursoData {
  nome: string;
  descricao: string;
}

export const useCriarCurso = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const criarCurso = async (data: CursoData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await criarCursoApi(data);
      return response.data;
    } catch (err) {
      setError('Ocorreu um erro ao criar o curso.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { criarCurso, loading, error };
};
