
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Box, CircularProgress, Typography } from '@mui/material';

import AppRoutes from './app.routes';
import { AuthProvider, useAuth } from './contexto/contexto.autenticacao';
import { env } from './config/env';
import { logger } from './utils/logger';
import ErrorBoundary from './app.error.boundary';

// 1. Loader aprimorado com Material-UI para uma melhor UX
const AppLoader: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#121212',
      gap: 2,
    }}
  >
    <CircularProgress />
    <Typography>Carregando aplicação...</Typography>
  </Box>
);

// O conteúdo da aplicação que depende do estado de autenticação
const AppContent: React.FC = () => {
  const { loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      logger.info('FRONTEND', 'SISTEMA', 'Aplicação pronta', {
        path: window.location.pathname,
      });
    }
  }, [loading]);

  if (loading) {
    return <AppLoader />;
  }

  return <AppRoutes />;
};

// 2. Camada de Provedores para uma arquitetura mais limpa e escalável
const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ErrorBoundary>
    <Router>
      <AuthProvider>{children}</AuthProvider>
    </Router>
  </ErrorBoundary>
);

const App: React.FC = () => {
  // A verificação de configuração agora é mais limpa
  const isGoogleAuthConfigured = Boolean(env.googleClientId && !env.googleClientId.includes('SEU_GOOGLE_CLIENT_ID'));

  // 3. O logger.warn agora está dentro de um useEffect para rodar apenas uma vez
  useEffect(() => {
    if (!isGoogleAuthConfigured) {
      logger.warn('FRONTEND', 'AUTH', 'Autenticação do Google não configurada. VITE_GOOGLE_CLIENT_ID não está definida.');
    }
  }, [isGoogleAuthConfigured]);

  // 4. A árvore da aplicação é definida uma única vez, evitando recriações
  const appTree = (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );

  if (isGoogleAuthConfigured) {
    return (
      <GoogleOAuthProvider clientId={env.googleClientId!}>
        {appTree}
      </GoogleOAuthProvider>
    );
  }

  // 5. Retorna a app com um aviso visual claro (melhor DX) se o Google não estiver configurado
  return (
    <>
      {appTree}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#ffc107', // Cor de aviso do Material UI
          color: 'black',
          padding: '6px 16px',
          borderRadius: '4px',
          boxShadow: 3,
          zIndex: 9999,
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        Aviso: Login com Google está desabilitado.
      </Box>
    </>
  );
};

export default App;
