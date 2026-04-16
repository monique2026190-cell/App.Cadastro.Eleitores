import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

interface ModalEditarPastaProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (newName: string) => void;
  currentName: string;
}

const ModalEditarPasta: React.FC<ModalEditarPastaProps> = ({ open, onClose, onConfirm, currentName }) => {
  const [name, setName] = useState(currentName);

  useEffect(() => {
    if (open) {
      setName(currentName);
    }
  }, [open, currentName]);

  const handleConfirm = () => {
    if (name.trim()) {
      onConfirm(name.trim());
    }
  };

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { bgcolor: '#2d2d2d', color: 'white' } }}>
      <DialogTitle>Editar Nome da Pasta</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Novo nome da pasta"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            input: { color: 'white' },
            label: { color: '#aaa' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiInput-underline:before': { borderBottomColor: '#555' },
            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: '#bbb' }}>Cancelar</Button>
        <Button onClick={handleConfirm} sx={{ color: 'white' }}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalEditarPasta;
