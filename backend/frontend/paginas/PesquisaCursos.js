import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, Box, TextField, IconButton, CssBaseline, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../componentes/Footer';
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
const PesquisaCursos = () => {
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', minHeight: '100vh' }, children: [_jsx(Cabecalho, {}), _jsxs(Container, { sx: { mt: 10, mb: 8, flexGrow: 1 }, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Pesquisar Cursos" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 4 }, children: [_jsx(TextField, { fullWidth: true, variant: "outlined", placeholder: "Digite o nome do curso...", sx: { mr: 1 } }), _jsx(IconButton, { color: "primary", children: _jsx(SearchIcon, {}) })] })] }), _jsx(Footer, {})] })] }));
};
export default PesquisaCursos;
