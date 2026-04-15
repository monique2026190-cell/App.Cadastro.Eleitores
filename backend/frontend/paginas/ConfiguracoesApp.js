import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Container, Box, CssBaseline, GlobalStyles, Card, CardContent, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Notifications, Person, Settings } from '@mui/icons-material';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0f1115',
            paper: '#1a1d24',
        },
        text: {
            primary: '#ffffff',
            secondary: '#9aa4af',
        }
    },
});
const cardStyle = {
    height: '100%',
    borderRadius: 3,
    p: 2,
    background: '#1a1d24',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.04)',
    '&:hover': {
        transform: 'translateY(-4px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
    }
};
const ConfiguracoesApp = () => {
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#0f1115" } } }), _jsxs(Container, { maxWidth: "sm", sx: { mt: 6 }, children: [_jsxs(Box, { sx: { mb: 5 }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 600 }, children: "Configura\u00E7\u00F5es" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', mt: 1 }, children: "Gerencie prefer\u00EAncias e informa\u00E7\u00F5es da sua conta" })] }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { sx: { mb: 2, fontSize: 14, color: 'text.secondary' }, children: "CONTA" }), _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2 }, children: [_jsx(Person, { sx: { color: '#60a5fa' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "Meu Perfil" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Edite suas informa\u00E7\u00F5es pessoais" })] })] }) }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2 }, children: [_jsx(Settings, { sx: { color: '#a78bfa' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "Conta" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Seguran\u00E7a e prefer\u00EAncias" })] })] }) }) })] })] }), _jsxs(Box, { children: [_jsx(Typography, { sx: { mb: 2, fontSize: 14, color: 'text.secondary' }, children: "PREFER\u00CANCIAS" }), _jsx(Grid, { container: true, spacing: 2, children: _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2 }, children: [_jsx(Notifications, { sx: { color: '#34d399' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "Notifica\u00E7\u00F5es" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Controle alertas e avisos" })] })] }) }) }) })] })] })] }));
};
export default ConfiguracoesApp;
