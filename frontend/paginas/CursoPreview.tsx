
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Container, CssBaseline, GlobalStyles, Card } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import CardMetodosPagamento from '../componentes/card.metodos.pagamento';
import CarrosselImagens from '../componentes/CarrosselImagens';
import DescricaoCursoCard from '../componentes/DescricaoCursoCard';
import BotaoComprar from '../componentes/BotaoComprar';
import Logo from '../componentes/logo';
import { buscarCursoPorId } from '../servicos/servico.cursos';

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
  typography: {
    fontFamily: 'Inter, sans-serif',
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
});

const CursoPreview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [curso, setCurso] = useState<any>(null);

  useEffect(() => {
    if (id) {
      buscarCursoPorId(id)
        .then(response => {
          setCurso(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar curso:', error);
        });
    }
  }, [id]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  if (!curso) {
    return <div>Carregando...</div>; // Ou um spinner de carregamento
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: darkTheme.palette.background.default } }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton 
              aria-label="voltar" 
              onClick={() => navigate(-1)}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Logo />
            </Box>
            <Box sx={{ width: 48 }} /> 
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
          
          {/* Seção do Carrossel */}
          <Card sx={{ mb: 3, borderRadius: '12px', overflow: 'hidden' }}>
            <CarrosselImagens imagemUrl={curso.capa_curso} nomeCurso={curso.nome} cursoId={id!} />
          </Card>

          {/* Seção da Descrição */}
          <Card sx={{ mb: 3, borderRadius: '12px' }}>
            <DescricaoCursoCard nome={curso.nome} descricao={curso.descricao} preco={`R$ ${curso.preco}`} />
          </Card>

          {/* Seção do Botão de Compra */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <BotaoComprar onClick={handleOpenModal} />
          </Box>

        </Container>
        
      </Box>
      <CardMetodosPagamento open={modalOpen} onClose={handleCloseModal} />
    </ThemeProvider>
  );
};

export default CursoPreview;
