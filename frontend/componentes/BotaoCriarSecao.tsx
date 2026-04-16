import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface BotaoCriarSecaoProps {
  onCreateSection: () => void;
}

const BotaoCriarSecao: React.FC<BotaoCriarSecaoProps> = ({ onCreateSection }) => {
  return (
    <Tooltip title="Criar Seção">
      <Fab
        sx={{ position: 'fixed', bottom: 80, right: 30, bgcolor: '#1a1d24', color: '#ffffff', '&:hover': { bgcolor: '#2a2d34' } }}
        aria-label="Criar Seção"
        onClick={onCreateSection}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default BotaoCriarSecao;
