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

interface ModalCriarPastaProps {
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

const ModalCriarPasta: React.FC<ModalCriarPastaProps> = ({ open, onClose, onConfirm }) => {
  const [folderName, setFolderName] = useState('');

  const handleConfirm = () => {
    if (folderName.trim()) {
      onConfirm(folderName.trim());
      setFolderName('');
    }
  };

  const handleClose = () => {
    setFolderName('');
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-criar-pasta-title"
    >
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography id="modal-criar-pasta-title" variant="h6" component="h2">
              Criar Nova Pasta
            </Typography>
            <IconButton onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </Box>
        <TextField
          autoFocus
          margin="dense"
          label="Nome da Pasta"
          type="text"
          fullWidth
          variant="outlined"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
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

export default ModalCriarPasta;
