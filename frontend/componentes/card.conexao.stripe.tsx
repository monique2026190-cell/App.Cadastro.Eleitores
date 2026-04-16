
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

// Ícone do Stripe (SVG embutido para simplicidade)
const StripeLogo = () => (
    <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.13,3.08,48.24.49A.52.52,0,0,0,47.88,0H40.2a.52.52,0,0,0-.36.15L36.94,3.08a.52.52,0,0,0,0,.73l2.89,2.59a.52.52,0,0,0,.36.15h7.68a.52.52,0,0,0,.36-.15l2.89-2.59A.52.52,0,0,0,51.13,3.08Z" fill="#6772E5"></path>
        <path d="M42.33,10.15,39.44,7.56a.52.52,0,0,0-.72,0L35.83,10.15a.52.52,0,0,0,0,.73l2.89,2.59a.52.52,0,0,0,.72,0l2.89-2.59A.52.52,0,0,0,42.33,10.15Z" fill="#6772E5"></path>
        <path d="M5.68,3.08.15,8.19a.52.52,0,0,0,.31.66l4.24,1.81h0a.52.52,0,0,0,.66-.31L10.87,5a.52.52,0,0,0-.31-.66L6.32,2.42h0A.52.52,0,0,0,5.68,3.08Z" fill="#6772E5"></path>
        <path d="M11.63,13.23a.52.52,0,0,0-.66.31l-1,4.68a.52.52,0,0,0,.31.66l1.78.76a.52.52,0,0,0,.66-.31l1-4.68a.52.52,0,0,0-.31-.66l-1.78-.76Z" fill="#6772E5"></path>
        <path d="M18.82,6.59,13.28.3a.52.52,0,0,0-.65.17L7,11.19a.52.52,0,0,0,.17.65l5.54,6.29a.52.52,0,0,0,.65-.17l5.63-10.72A.52.52,0,0,0,18.82,6.59Z" fill="#6772E5"></path>
        <path d="M31,5.36a9.38,9.38,0,0,0-9.23,8.13,1.61,1.61,0,0,0,1.6,1.72H26A1.61,1.61,0,0,0,27.6,13.5,2.94,2.94,0,0,1,30.2,11a2.8,2.8,0,0,1,2.72-2.31,3,3,0,0,1,3,2.83,1.5,1.5,0,0,0,1.5,1.55h2.59A1.5,1.5,0,0,0,41.5,11.5,9.4,9.4,0,0,0,31,5.36Z" fill="#6772E5"></path>
    </svg>
);

const CardConexaoStripe: React.FC = () => {

  const handleConnect = () => {
    // Lógica para iniciar a conexão com o Stripe
    console.log("Iniciando conexão com o Stripe...");
    // Você pode redirecionar para a página de autorização do Stripe aqui
  };

  return (
    <Card
      sx={{
        borderRadius: '16px',
        backgroundColor: '#1E1E1E',
        boxShadow: '0 4px 12px 0 rgba(0,0,0,0.3)',
        p: 2,
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <StripeLogo />
        </Box>
        <Typography variant="h6" component="div" sx={{ fontWeight: '600', color: '#FFFFFF', mb: 1 }}>
          Conectar com Stripe
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          Conecte sua conta Stripe para receber pagamentos de forma segura e gerenciar suas transações diretamente na plataforma.
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={handleConnect}
          sx={{
            py: 1.5,
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#6772E5',
            '&:hover': { backgroundColor: '#5563C1' },
          }}
        >
          Conectar com Stripe
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardConexaoStripe;
