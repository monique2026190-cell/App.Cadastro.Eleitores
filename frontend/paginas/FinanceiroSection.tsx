
import React from 'react';
import { List, Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CreditCard, History } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    variant="caption"
    sx={{
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'text.secondary',
      letterSpacing: '1px',
      display: 'block',
      mb: 1,
      mt: 3,
      px: 2,
    }}
  >
    {children}
  </Typography>
);

const SettingsListItem: React.FC<{ icon: React.ReactElement; label: string; action?: React.ReactNode, onClick?: () => void }> = ({ icon, label, action, onClick }) => (
  <ListItem
    secondaryAction={action}
    sx={{
      bgcolor: 'background.paper',
      borderRadius: 2.5,
      mb: 1,
      p: '12px 16px',
      transition: 'background-color 0.3s',
      '&:hover': {
        bgcolor: '#282828',
        cursor: 'pointer'
      }
    }}
    onClick={onClick}
  >
    <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>{icon}</ListItemIcon>
    <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 500 }} />
  </ListItem>
);

export const FinanceiroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SectionTitle>Financeiro</SectionTitle>
      <List>
        <SettingsListItem icon={<CreditCard />} label="Contas para o Recebimento" onClick={() => navigate('/provedores')} />
        <SettingsListItem icon={<History />} label="Histórico Financeiro" onClick={() => navigate('/historico-financeiro')} />
      </List>
    </>
  );
};
