import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails, Box, CssBaseline, GlobalStyles, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BotaoConfiguracoesCurso from '../componentes/BotaoConfiguracoesCurso';
import BotaoPublicarConteudo from '../componentes/BotaoPublicarConteudo';
import Cabecalho from '../componentes/Cabecalho';
import Footer from '../componentes/Footer';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
});
const ConteudoCurso = () => {
    const { id } = useParams();
    const secoes = [
        {
            id: 1,
            titulo: 'Seção 1: Módulo de Boas-Vindas',
            pastas: [
                { id: 1, titulo: 'Introdução ao Curso', aulas: ['Aula 1: Apresentação', 'Aula 2: Navegando na plataforma'] },
                { id: 2, titulo: 'Recursos Adicionais', aulas: ['Material de apoio', 'Links úteis'] },
            ],
        },
        {
            id: 2,
            titulo: 'Seção 2: Desenvolvimento Front-End',
            pastas: [
                { id: 3, titulo: 'HTML e CSS', aulas: ['Aula 3: Estrutura HTML', 'Aula 4: Estilização com CSS'] },
                { id: 4, titulo: 'JavaScript Básico', aulas: ['Aula 5: Variáveis e tipos de dados', 'Aula 6: Funções e eventos'] },
            ],
        },
    ];
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsx(Cabecalho, {}), _jsxs(Container, { component: "main", sx: { mt: 10, flexGrow: 1, pb: 12 }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }, children: [_jsxs(Typography, { component: "h1", variant: "h4", children: ["Conte\u00FAdo do Curso ", id] }), id && _jsx(BotaoConfiguracoesCurso, { id: id })] }), secoes.map(secao => (_jsxs(Accordion, { sx: { bgcolor: 'background.paper', color: 'text.primary', mb: 2 }, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, { sx: { color: 'white' } }), children: _jsx(Typography, { variant: "h6", children: secao.titulo }) }), _jsx(AccordionDetails, { children: secao.pastas.map(pasta => (_jsxs(Accordion, { sx: { bgcolor: '#2C2C2C', color: 'text.primary', mb: 1 }, children: [_jsxs(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, { sx: { color: 'white' } }), children: [_jsx(FolderIcon, { sx: { mr: 1, color: '#FFC107' } }), _jsx(Typography, { children: pasta.titulo })] }), _jsx(AccordionDetails, { children: _jsx(List, { dense: true, children: pasta.aulas.map(aula => (_jsx(ListItem, { children: _jsx(ListItemText, { primary: aula }) }, aula))) }) })] }, pasta.id))) })] }, secao.id)))] }), id && _jsx(BotaoPublicarConteudo, { id: id }), _jsx(Footer, {})] }));
};
export default ConteudoCurso;
