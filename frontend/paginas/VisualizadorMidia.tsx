
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon, Close as CloseIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const VisualizadorMidia: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Por enquanto, vamos usar uma imagem de exemplo
  const midiaUrl = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80';

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ position: 'absolute', top: 16, left: 16, color: 'white' }}>
          <CloseIcon />
        </IconButton>

        <IconButton sx={{ position: 'absolute', left: 32, color: 'white' }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        <img src={midiaUrl} alt="Visualização de Mídia" style={{ maxHeight: '90%', maxWidth: '90%' }} />

        <IconButton sx={{ position: 'absolute', right: 32, color: 'white' }}>
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
};

export default VisualizadorMidia;
