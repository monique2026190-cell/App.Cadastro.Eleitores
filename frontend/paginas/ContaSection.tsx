
import React from 'react';
import { List, Switch, Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, Language, Notifications } from '@mui/icons-material';

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

const SettingsListItem: React.FC<{ icon: React.ReactElement; label: string; action?: React.ReactNode }> = ({ icon, label, action }) => (
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
      }
    }}
  >
    <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>{icon}</ListItemIcon>
    <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 500 }} />
  </ListItem>
);

export const ContaSection: React.FC = () => (
  <>
    <SectionTitle>Conta</SectionTitle>
    <List>
      <SettingsListItem icon={<AccountCircle />} label="Editar Perfil" />
      <SettingsListItem icon={<Language />} label="Idioma" />
      <SettingsListItem icon={<Notifications />} label="Notificações" />
    </List>
  </>
);
