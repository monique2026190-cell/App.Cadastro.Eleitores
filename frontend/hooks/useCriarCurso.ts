import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarCurso } from '../servicos/servico.cursos';
import { useAuth } from '../contexto/contexto.autenticacao'; 

export const useCriarCurso = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { usuario } = useAuth(); // Obter o usuário do contexto de autenticação

  const salvarCurso = async (cursoData: { nome: string; descricao: string; capa_curso: string; preco: number; }) => {
    if (!usuario) {
      setError('Você precisa estar logado para criar um curso.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await criarCurso({ ...cursoData, usuario_id: usuario.id });
      navigate('/meus-cursos', { state: { tab: 'criados' } }); // Sucesso, navegar para a lista de cursos criados
    } catch (err) {
      setError('Falha ao criar o curso. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { salvarCurso, loading, error };
};
