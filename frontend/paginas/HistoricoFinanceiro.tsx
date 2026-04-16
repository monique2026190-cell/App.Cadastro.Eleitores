
import React from 'react';
import {
  CssBaseline, GlobalStyles, ThemeProvider, createTheme, Box, AppBar, Toolbar, IconButton, Typography,
  Container
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    primary: {
      main: '#5E97F6',
    },
    text: {
      primary: '#EAEAEA',
      secondary: '#A9A9A9',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
});

export const HistoricoFinanceiro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: darkTheme.palette.background.default } }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="voltar" onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Histórico Financeiro
            </Typography>
          </Toolbar>
        </AppBar>

        <Container component="main" maxWidth="md" sx={{ flexGrow: 1, overflowY: 'auto', py: 3 }}>
          <Typography variant="body1">
            Aqui você poderá visualizar seu histórico financeiro.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
