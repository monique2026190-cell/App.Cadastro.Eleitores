
import React from 'react';
import { Modal, Box, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Link as LinkIcon, Visibility as VisibilityIcon, Publish as PublishIcon, Close as CloseIcon } from '@mui/icons-material';

interface ModalOpcoesCursoProps {
  open: boolean;
  onClose: () => void;
  onPreviewClick: () => void;
  onPublishClick: () => void; // Add this line
}

const ModalOpcoesCurso: React.FC<ModalOpcoesCursoProps> = ({ open, onClose, onPreviewClick, onPublishClick }) => { // Add onPublishClick here
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-opcoes-curso-title"
    >
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography id="modal-opcoes-curso-title" variant="h6" component="h2">
            Opções do Curso
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="Link" />
          </ListItem>
          {/* Add onClick handler to this ListItem */}
          <ListItem button onClick={onPreviewClick}>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary="Pré-visualização" />
          </ListItem>
          <ListItem button onClick={onPublishClick}>
            <ListItemIcon>
              <PublishIcon />
            </ListItemIcon>
            <ListItemText primary="Publicar" />
          </ListItem>
        </List>
      </Box>
    </Modal>
  );
};

export default ModalOpcoesCurso;
