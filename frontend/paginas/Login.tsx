
import React, { useState } from 'react';
import { useAuth } from '../contexto/contexto.autenticacao';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Typography, TextField, Button, CircularProgress, Alert, Card, CardContent, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GoogleIcon from '@mui/icons-material/Google';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    primary: {
      main: '#90caf9',
    },
  },
});

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determina a rota de redirecionamento. Se o usuário veio de uma rota protegida, `from` estará no estado.
  // Caso contrário, redireciona para a raiz, deixando a RotaProtegida decidir o destino.
  const from = location.state?.from?.pathname || '/';

  const validate = () => {
    if (!email.includes('@')) return 'Email inválido.';
    if (password.length < 6) return 'A senha precisa ter no mínimo 6 caracteres.';
    return null;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigate(from, { replace: true }); // Redireciona para a rota de origem
    } catch (err: any) {
      setError(err.message || 'Email ou senha inválidos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await loginWithGoogle();
      navigate(from, { replace: true }); // Redireciona para a rota de origem
    } catch (err: any) {
      setError(err.message || 'Erro ao entrar com o Google. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ width: '100%', padding: 2 }}>
          <CardContent>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography component="h1" variant="h5" fontWeight="bold">
                Login
              </Typography>
            </Box>
            
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleLogin} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço de Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, position: 'relative' }}
                disabled={loading}
              >
                {loading && <CircularProgress size={24} sx={{ position: 'absolute' }} />}
                Entrar
              </Button>

              <Divider sx={{ my: 2 }}>OU</Divider>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                {loading && <CircularProgress size={24} sx={{ position: 'absolute', left: '24px'}}/>}
                Entrar com Google
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
