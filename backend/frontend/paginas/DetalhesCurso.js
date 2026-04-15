import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, Typography, Container, Button, CardMedia, CssBaseline, GlobalStyles } from '@mui/material';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardMetodosPagamento from '../componentes/card.metodos.pagamento';
import Cabecalho from '../componentes/Cabecalho';
import DescricaoCursoCard from '../componentes/DescricaoCursoCard';
import ComentariosCard from '../componentes/ComentariosCard';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
});
const DetalhesCurso = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const curso = {
        id: id,
        nome: `Curso de ${id}`,
        descricao: `Descrição detalhada do curso de ${id}.`,
        preco: 'R$ 49,99',
        imagem: 'https://via.placeholder.com/300'
    };
    const comentarios = [
        { user: 'Alice', text: 'Ótimo curso, aprendi muito!' },
        { user: 'Beto', text: 'O conteúdo é bem explicado.' },
    ];
    const handleComprar = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsx(Cabecalho, {}), _jsxs(Container, { component: "main", sx: { mt: 10 }, children: [_jsxs(Card, { sx: { bgcolor: 'background.paper' }, children: [_jsx(CardMedia, { component: "img", height: "300", image: curso.imagem, alt: `Imagem do ${curso.nome}` }), _jsxs(CardContent, { children: [_jsx(Typography, { component: "h1", variant: "h4", sx: { mb: 2 }, children: curso.nome }), _jsx(Typography, { variant: "h6", color: "text.secondary", sx: { mb: 2 }, children: curso.preco }), _jsx(Button, { variant: "contained", color: "primary", sx: { mt: 3 }, onClick: handleComprar, children: "Comprar Agora" })] })] }), _jsx(DescricaoCursoCard, { descricao: curso.descricao }), _jsx(ComentariosCard, { comments: comentarios }), _jsx(CardMetodosPagamento, { open: open, onClose: handleClose })] })] }));
};
export default DetalhesCurso;
