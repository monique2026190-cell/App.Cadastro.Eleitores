import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, TextField, Button, Box, CssBaseline, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
});
const CriarProposta = () => {
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsxs(Container, { component: "main", maxWidth: "md", sx: { mt: 4 }, children: [_jsx(Typography, { component: "h1", variant: "h4", sx: { mb: 4 }, children: "Criar Proposta de Curso" }), _jsxs(Box, { component: "form", noValidate: true, sx: { mt: 1 }, children: [_jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "titulo", label: "T\u00EDtulo da Proposta", name: "titulo", autoFocus: true, variant: "outlined", InputLabelProps: {
                                    style: { color: '#E0E0E0' },
                                }, sx: { input: { color: 'white' }, '.MuiOutlinedInput-root': { '.MuiOutlinedInput-notchedOutline': { borderColor: 'gray' } } } }), _jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "descricao", label: "Descri\u00E7\u00E3o da Proposta", name: "descricao", multiline: true, rows: 4, variant: "outlined", InputLabelProps: {
                                    style: { color: '#E0E0E0' },
                                }, sx: { textarea: { color: 'white' }, '.MuiOutlinedInput-root': { '.MuiOutlinedInput-notchedOutline': { borderColor: 'gray' } } } }), _jsx(Button, { type: "submit", variant: "contained", sx: { mt: 3, mb: 2 }, children: "Enviar Proposta" })] })] })] }));
};
export default CriarProposta;
