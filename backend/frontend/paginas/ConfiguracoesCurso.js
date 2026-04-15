import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Container, Box, CssBaseline, GlobalStyles, Card, CardContent, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Edit, Book, Delete, BarChart, People } from '@mui/icons-material';
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
const ConfiguracoesCurso = () => {
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: '#0f1115' } } }), _jsxs(Container, { maxWidth: "md", sx: { mt: 6 }, children: [_jsxs(Box, { sx: { mb: 5 }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 600 }, children: "Configura\u00E7\u00F5es do Curso" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', mt: 1 }, children: "Gerencie as informa\u00E7\u00F5es e o conte\u00FAdo do seu curso" })] }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { sx: { mb: 2, fontSize: 14, color: 'text.secondary' }, children: "GERAL" }), _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2, alignItems: 'center' }, children: [_jsx(Edit, { sx: { color: '#60a5fa' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "Editar Informa\u00E7\u00F5es" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Altere o t\u00EDtulo, a descri\u00E7\u00E3o e a capa" })] })] }) }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2, alignItems: 'center' }, children: [_jsx(People, { sx: { color: '#34d399' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "Gerenciar Alunos" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Visualize e administre os participantes" })] })] }) }) })] })] }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { sx: { mb: 2, fontSize: 14, color: 'text.secondary' }, children: "CONTE\u00DADO" }), _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2, alignItems: 'center' }, children: [_jsx(Book, { sx: { color: '#a78bfa' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "Estrutura do Curso" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Adicione ou remova m\u00F3dulos e aulas" })] })] }) }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2, alignItems: 'center' }, children: [_jsx(BarChart, { sx: { color: '#f59e0b' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "An\u00E1lises e Relat\u00F3rios" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Acompanhe o engajamento e o progresso" })] })] }) }) })] })] }), _jsxs(Box, { children: [_jsx(Typography, { sx: { mb: 2, fontSize: 14, color: 'text.secondary' }, children: "AVAN\u00C7ADO" }), _jsx(Grid, { container: true, spacing: 1, children: _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Card, { sx: cardStyle, children: _jsxs(CardContent, { sx: { display: 'flex', gap: 2, alignItems: 'center' }, children: [_jsx(Delete, { sx: { color: '#ef4444' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 500 }, children: "Excluir Curso" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Remova permanentemente este curso" })] })] }) }) }) })] })] })] }));
};
export default ConfiguracoesCurso;
