import React, { useState } from 'react';
import {
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  CreateNewFolder as CreateNewFolderIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@mui/icons-material';
import ListaPastas from './ListaPastas';

interface Pasta {
  id: number;
  titulo: string;
}

interface Secao {
  id: number;
  titulo: string;
  pastas: Pasta[];
}

interface SecaoConteudoProps {
  cursoId: string;
  secoes: Secao[];
  handleCreateFolder: (sectionId: number) => void;
  handleEditFolder: (sectionId: number, folderId: number, currentName: string) => void;
  handleDeleteFolder: (sectionId: number, folderId: number) => void;
  onMoveSection: (sectionId: number, direction: 'up' | 'down') => void;
}

const SecaoConteudo: React.FC<SecaoConteudoProps> = ({ 
  cursoId,
  secoes, 
  handleCreateFolder, 
  handleEditFolder,
  handleDeleteFolder,
  onMoveSection 
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, sectionId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedSectionId(sectionId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedSectionId(null);
  };

  const isFirstSection = (sectionId: number) => secoes.findIndex(s => s.id === sectionId) === 0;
  const isLastSection = (sectionId: number) => secoes.findIndex(s => s.id === sectionId) === secoes.length - 1;

  return (
    <Box>
      {secoes.map((secao, index) => (
        <React.Fragment key={secao.id}>
          <Card sx={{ bgcolor: '#1E1E1E', color: 'white', borderRadius: 2 }}>
            <CardContent sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant="h6">{secao.titulo}</Typography>
                <IconButton onClick={(event) => handleMenuClick(event, secao.id)}>
                  <MoreVertIcon sx={{ color: 'white' }} />
                </IconButton>
              </Box>
            </CardContent>
            <CardContent sx={{ pt: 0 }}>
              <ListaPastas 
                cursoId={cursoId}
                sectionId={secao.id}
                pastas={secao.pastas} 
                onEdit={handleEditFolder}
                onDelete={handleDeleteFolder}
              />
            </CardContent>
          </Card>
          {index < secoes.length - 1 && <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />}
        </React.Fragment>
      ))}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {selectedSectionId && !isFirstSection(selectedSectionId) && (
            <MenuItem onClick={() => { onMoveSection(selectedSectionId, 'up'); handleMenuClose(); }}>
                <ListItemIcon><ArrowUpwardIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Mover para Cima</ListItemText>
            </MenuItem>
        )}
        {selectedSectionId && !isLastSection(selectedSectionId) && (
            <MenuItem onClick={() => { onMoveSection(selectedSectionId, 'down'); handleMenuClose(); }}>
                <ListItemIcon><ArrowDownwardIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Mover para Baixo</ListItemText>
            </MenuItem>
        )}
        <MenuItem onClick={() => { handleCreateFolder(selectedSectionId!); handleMenuClose(); }}>
            <ListItemIcon><CreateNewFolderIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Criar Pasta</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Editar</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <ListItemIcon><DeleteIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Excluir</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SecaoConteudo;
