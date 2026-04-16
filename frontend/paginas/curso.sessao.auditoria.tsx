import React from 'react';
import { List, Button, Box } from '@mui/material';
import { ReceiptLong, Send } from '@mui/icons-material';
import { SectionTitle, SettingsListItem } from '../componentes/SettingsComponents';

export const AuditoriaSection: React.FC = () => (
  <List>
    <SectionTitle>Auditoria</SectionTitle>
    <SettingsListItem icon={<ReceiptLong />} label="Auditoria de Entrada e Saída" />
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 2 }}>
      <Button
        variant="contained"
        startIcon={<Send />}
        sx={{ 
          py: 1.5,
          px: 4,
          fontWeight: 'bold',
          borderRadius: '12px' 
        }}
      >
        Enviar para análise
      </Button>
    </Box>
  </List>
);
