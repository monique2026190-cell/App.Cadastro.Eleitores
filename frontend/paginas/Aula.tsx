import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography, 
  Container, 
  Box, 
  CssBaseline, 
  GlobalStyles,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  NoteAdd as NoteAddIcon,
  AttachFile as AttachFileIcon
} from '@mui/icons-material';
import Cabecalho from '../componentes/Cabecalho';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
});

const actions = [
  { icon: <NoteAddIcon />, name: 'Criar nota' },
  { icon: <AttachFileIcon />, name: 'Adicionar arquivo' },
];

const Aula: React.FC = () => {
  const { cursoId, aulaId } = useParams<{ cursoId: string, aulaId: string }>();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#121212" } }} />
      <Cabecalho showBackButton={true} />
      <Container component="main" sx={{ mt: 10, flexGrow: 1, pb: 12 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          Aula: Bem-vindo ao Módulo
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          ID da Pasta: {aulaId} (Curso: {cursoId})
        </Typography>
        
        <Box sx={{ my: 4, p: 3, bgcolor: '#1E1E1E', borderRadius: 2, minHeight: '400px' }}>
          <Typography sx={{color: 'text.secondary'}}>
            O conteúdo desta aula aparecerá aqui. Use o botão de ação no canto inferior direito para adicionar materiais.
          </Typography>
        </Box>

      </Container>
      
      <SpeedDial
        ariaLabel="SpeedDial para adicionar conteúdo"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
      
    </ThemeProvider>
  );
};

export default Aula;
