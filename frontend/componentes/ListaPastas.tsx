import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemButton,
} from '@mui/material';
import {
  Folder as FolderIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Pasta {
  id: number;
  titulo: string;
}

interface ListaPastasProps {
  cursoId: string;
  sectionId: number;
  pastas: Pasta[];
  onEdit: (sectionId: number, folderId: number, currentName: string) => void;
  onDelete: (sectionId: number, folderId: number) => void;
}

const ListaPastas: React.FC<ListaPastasProps> = ({ cursoId, sectionId, pastas, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [selectedFolderName, setSelectedFolderName] = useState<string | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, folder: Pasta) => {
    event.stopPropagation(); // Impede que o clique no ícone propague para o ListItem
    setAnchorEl(event.currentTarget);
    setSelectedFolderId(folder.id);
    setSelectedFolderName(folder.titulo);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedFolderId(null);
    setSelectedFolderName(null);
  };

  const handleFolderClick = (folderId: number) => {
    navigate(`/curso/${cursoId}/aula/${folderId}`);
  };

  const handleEditClick = () => {
    if (selectedFolderId && selectedFolderName) {
      onEdit(sectionId, selectedFolderId, selectedFolderName);
    }
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    if (selectedFolderId) {
      onDelete(sectionId, selectedFolderId);
    }
    handleMenuClose();
  };

  if (pastas.length === 0) {
    return (
      <Typography variant="body2" sx={{ color: 'text.secondary', ml: 2, mt: 1 }}>
        Nenhuma pasta nesta seção.
      </Typography>
    );
  }

  return (
    <>
      <List dense>
        {pastas.map(pasta => (
          <ListItemButton key={pasta.id} onClick={() => handleFolderClick(pasta.id)} sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 32 }}><FolderIcon sx={{ color: '#bdbdbd' }} fontSize="small" /></ListItemIcon>
            <ListItemText primary={pasta.titulo} />
            <IconButton 
              aria-label="options"
              onClick={(event) => handleMenuClick(event, pasta)} 
              sx={{ ml: 1 }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        ))}
      </List>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEditClick}>
          <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Editar</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDeleteClick}>
          <ListItemIcon><DeleteIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Excluir</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ListaPastas;
