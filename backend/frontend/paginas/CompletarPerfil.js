import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, TextField, Button, Typography, Container, Avatar, CssBaseline, GlobalStyles } from '@mui/material';
import { Person } from '@mui/icons-material';
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
const CompletarPerfil = () => {
    const navigate = useNavigate();
    const handleSave = (e) => {
        e.preventDefault();
        navigate('/cursos');
    };
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsx(Container, { component: "main", maxWidth: "xs", sx: { display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }, children: _jsx(Card, { sx: { boxShadow: 3, borderRadius: 2 }, children: _jsxs(CardContent, { sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }, children: [_jsx(Avatar, { sx: { m: 1, bgcolor: 'secondary.main' }, children: _jsx(Person, {}) }), _jsx(Typography, { component: "h1", variant: "h5", sx: { mb: 2 }, children: "Completar Perfil" }), _jsxs("form", { onSubmit: handleSave, style: { width: '100%' }, children: [_jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "nomeUsuario", label: "Nome de Usu\u00E1rio", name: "nomeUsuario", autoFocus: true }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 }, children: "Salvar" })] })] }) }) })] }));
};
export default CompletarPerfil;
