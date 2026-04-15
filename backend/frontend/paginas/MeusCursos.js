import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Container, Typography, Box, CssBaseline, GlobalStyles, Tabs, Tab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../componentes/Footer';
import MeusCursosCard from '../componentes/conteiner.meus.curso';
import Cabecalho from '../componentes/Cabecalho';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
});
// Cursos comprados (dados fictícios)
const cursosComprados = [
    {
        id: 1,
        nome: 'Curso de React',
        progresso: 75,
        imagemUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        id: 2,
        nome: 'Curso de Node.js',
        progresso: 50,
        imagemUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
];
// Cursos publicados (dados fictícios)
const cursosPublicados = [
    {
        id: 3,
        nome: 'Curso de TypeScript',
        progresso: 100, // Progresso não se aplica a cursos publicados, mas mantendo a estrutura
        imagemUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
];
const MeusCursos = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: '#121212' } } }), _jsx(Cabecalho, {}), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', minHeight: '100vh' }, children: [_jsxs(Container, { sx: { mt: 10, mb: 8, flexGrow: 1 }, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, sx: { mb: 4, fontWeight: 'bold' }, children: "Meus Cursos" }), _jsx(Box, { sx: { borderBottom: 1, borderColor: 'divider', mb: 4 }, children: _jsxs(Tabs, { value: selectedTab, onChange: handleChange, "aria-label": "abas de cursos", variant: "fullWidth", children: [_jsx(Tab, { label: "Comprados" }), _jsx(Tab, { label: "Publicados" })] }) }), selectedTab === 0 && (_jsx(Box, { children: cursosComprados.map(curso => (_jsx(MeusCursosCard, { id: curso.id, nome: curso.nome, progresso: curso.progresso, imagemUrl: curso.imagemUrl }, curso.id))) })), selectedTab === 1 && (_jsx(Box, { children: cursosPublicados.map(curso => (_jsx(MeusCursosCard, { id: curso.id, nome: curso.nome, progresso: curso.progresso, imagemUrl: curso.imagemUrl }, curso.id))) }))] }), _jsx(Footer, {})] })] }));
};
export default MeusCursos;
