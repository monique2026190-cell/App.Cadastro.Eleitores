import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, IconButton, CardMedia } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ModalOpcoesCurso from './ModalOpcoesCurso';
import { publicarCurso } from '../servicos/servico.cursos';

interface MeusCursosCardProps {
  id: number;
  nome: string;
  progresso: number;
  imagemUrl?: string;
}

const MeusCursosCard: React.FC<MeusCursosCardProps> = ({ id, nome, progresso, imagemUrl }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    navigate(`/conteudo-curso/${id}`);
  };

  const handleOpenModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePreviewClick = () => {
    navigate(`/curso/preview/${id}`);
    handleCloseModal();
  };

  const handlePublishClick = async () => {
    try {
      await publicarCurso(id);
      navigate('/cursos');
    } catch (error) {
      console.error('Falha ao publicar o curso', error);
      // Lide com o erro de forma apropriada, por exemplo, mostrando uma notificação para o usuário.
    }
    handleCloseModal();
  };

  return (
    <>
      <Card
        sx={{
          mb: 3,
          borderRadius: '16px',
          backgroundColor: '#1E1E1E',
          boxShadow: '0 4px 12px 0 rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px 0 rgba(0,0,0,0.4)',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="170"
            image={imagemUrl || 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}
            alt={nome}
            onClick={handleCardClick}
            sx={{ cursor: 'pointer' }}
          />
          <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
              <IconButton
                aria-label="settings"
                onClick={handleOpenModal}
                sx={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.4)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.6)'} }}
              >
                <MoreVert />
              </IconButton>
          </Box>
        </Box>

        <CardContent sx={{ color: '#FFFFFF' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: '600', mb: 2, cursor: 'pointer' }} onClick={handleCardClick}>
            {nome}
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={handleCardClick}
            sx={{
              py: 1.5,
              fontWeight: 'bold',
              backgroundColor: '#5E97F6',
              '&:hover': { backgroundColor: '#4a78c4' }
            }}
          >
            Acessar Curso
          </Button>
        </CardContent>
      </Card>
      <ModalOpcoesCurso
        open={isModalOpen}
        onClose={handleCloseModal}
        onPreviewClick={handlePreviewClick}
        onPublishClick={handlePublishClick}
      />
    </>
  );
};

export default MeusCursosCard;
