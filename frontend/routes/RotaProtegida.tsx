
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexto/contexto.autenticacao';
import { Box, CircularProgress } from '@mui/material';

const RotaProtegida: React.FC = () => {
  const { user, token, loading } = useAuth();
  const location = useLocation();

  // 1. Loader global enquanto o estado de autenticação é resolvido.
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#121212' }}>
        <CircularProgress />
      </Box>
    );
  }

  // 2. Se não há token, o usuário não está autenticado. Redireciona para o login.
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. Segurança extra: se há token mas o objeto `user` ainda não está disponível, redireciona para login como fallback.
  // Isso previne flashes de conteúdo protegido ou erros se a API de `user` falhar.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 4. Se o perfil do usuário está incompleto, força o redirecionamento para a página de completar perfil.
  if (!user.perfilCompleto) {
    // Apenas redireciona se ele não estiver já na página de completar perfil para evitar loops.
    if (location.pathname !== '/completar-perfil') {
      return <Navigate to="/completar-perfil" replace />;
    }
  }

  // 5. Se o perfil já está completo, impede que o usuário acesse a página de completar perfil novamente.
  if (user.perfilCompleto && location.pathname === '/completar-perfil') {
    return <Navigate to="/cursos" replace />;
  }

  // 6. Se todas as verificações passaram, o usuário tem permissão para acessar a rota.
  return <Outlet />;
};

export default RotaProtegida;
