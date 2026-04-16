
import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CursoCardProps {
  id: number;
  nome: string;
  descricao: string;
}

const CursoCard: React.FC<CursoCardProps> = ({ id, nome, descricao }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 4,
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          bgcolor: 'background.paper',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',

          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
          }
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={`https://source.unsplash.com/random/400x225?course,technology&sig=${id}`}
          alt={nome}
          onClick={() => navigate(`/curso/${id}`)}
          sx={{ cursor: 'pointer' }}
        />

        <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold',
              mb: 1.5,
              color: 'text.primary',
              cursor: 'pointer'
            }}
             onClick={() => navigate(`/curso/${id}`)}
          >
            {nome}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 3,
              minHeight: 40,
              flexGrow: 1
            }}
          >
            {descricao.substring(0, 100) + (descricao.length > 100 ? '...' : '')}
          </Typography>

           <Box sx={{ mt: 'auto' }}>
            <Button
              onClick={() => navigate(`/curso/${id}`)}
              fullWidth
              variant="contained"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold',
                py: 1.5,
              }}
            >
              Ver Detalhes
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CursoCard;
