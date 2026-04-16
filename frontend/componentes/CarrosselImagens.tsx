
import React from 'react';
import { CardMedia, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CarrosselImagensProps {
  imagemUrl: string;
  nomeCurso: string;
  cursoId: string;
}

const CarrosselImagens: React.FC<CarrosselImagensProps> = ({ imagemUrl, nomeCurso, cursoId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/curso/${cursoId}/media`);
  };

  return (
    <Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="400"
        image={imagemUrl}
        alt={nomeCurso}
      />
    </Box>
  );
};

export default CarrosselImagens;
