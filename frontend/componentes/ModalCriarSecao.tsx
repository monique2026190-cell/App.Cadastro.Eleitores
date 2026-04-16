import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface ModalCriarSecaoProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ModalCriarSecao: React.FC<ModalCriarSecaoProps> = ({ open, onClose, onConfirm }) => {
  const [sectionName, setSectionName] = useState('');

  const handleConfirm = () => {
    if (sectionName.trim()) {
      onConfirm(sectionName.trim());
      setSectionName('');
    }
  };

  const handleClose = () => {
    setSectionName('');
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-criar-secao-title"
    >
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography id="modal-criar-secao-title" variant="h6" component="h2">
              Criar Nova Seção
            </Typography>
            <IconButton onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </Box>
        <TextField
          autoFocus
          margin="dense"
          label="Nome da Seção"
          type="text"
          fullWidth
          variant="outlined"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleConfirm()}
          sx={{ mt: 2 }}
        />
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleClose} sx={{ mr: 1 }}>Cancelar</Button>
          <Button onClick={handleConfirm} variant="contained">Criar</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalCriarSecao;
