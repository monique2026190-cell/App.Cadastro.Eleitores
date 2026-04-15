import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Container, Grid, Box, CssBaseline, GlobalStyles, IconButton } from '@mui/material';
import BotaoCriarProposta from '../componentes/BotaoCriarProposta';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CursoCard from '../componentes/conteiner.lista.cursos';
import Footer from '../componentes/Footer';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../componentes/Cabecalho';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
});
const cursos = [
    { id: 1, nome: 'Curso de React', descricao: 'Aprenda o básico e o avançado de React.' },
    { id: 2, nome: 'Curso de Node.js', descricao: 'Construa aplicações back-end com Node.js.' },
    { id: 3, nome: 'Curso de Material-UI', descricao: 'Estilize suas aplicações com Material-UI.' },
];
const Cursos = () => {
    const navigate = useNavigate();
    const handleSearchClick = () => {
        navigate('/pesquisar-cursos');
    };
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsx(Cabecalho, {}), _jsxs(Container, { component: "main", sx: { mt: 10, mb: 8 }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }, children: [_jsx(Typography, { component: "h1", variant: "h4", children: "Cursos Dispon\u00EDveis" }), _jsx(IconButton, { color: "primary", onClick: handleSearchClick, children: _jsx(SearchIcon, {}) })] }), _jsx(Grid, { container: true, spacing: 4, children: cursos.map((curso) => (_jsx(CursoCard, { id: curso.id, nome: curso.nome, descricao: curso.descricao }, curso.id))) }), _jsx(BotaoCriarProposta, {})] }), _jsx(Footer, {})] }));
};
export default Cursos;
