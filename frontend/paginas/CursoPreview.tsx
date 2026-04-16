import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Container, CardMedia, CssBaseline, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cabecalho from '../componentes/Cabecalho';
import Footer from '../componentes/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    primary: {
      main: '#BB86FC',
    },
  },
});

const CursoPreview: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for the course - replace with actual API call
  const curso = {
    nome: 'Curso de Exemplo',
    descricao: 'Esta é uma descrição de exemplo para o curso. Aprenda tudo sobre este tópico incrível com nosso curso abrangente.',
    imagemUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    preco: 'R$ 99,90'
  };

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { backgroundColor: darkTheme.palette.background.default } }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Cabecalho />
            <Container maxWidth="md" sx={{ flexGrow: 1, mt: 10, mb: 4 }}>
              <Box sx={{ backgroundColor: '#1E1E1E', borderRadius: '12px', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={curso.imagemUrl}
                    alt={curso.nome}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                      {curso.nome}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#BDBDBD', marginBottom: 2 }}>
                      {curso.descricao}
                    </Typography>
                    <Typography variant="h5" sx={{ marginBottom: 2, color: '#BB86FC', fontWeight: 'bold' }}>
                      {curso.preco}
                    </Typography>
                    <Button variant="contained" size="large" sx={{ backgroundColor: '#BB86FC', '&:hover': { backgroundColor: '#9e66d4' } }}>
                      Comprar Agora
                    </Button>
                  </Box>
              </Box>
            </Container>
            <Footer />
        </Box>
    </ThemeProvider>
  );
};

export default CursoPreview;
