import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, Box, CssBaseline, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../componentes/Footer';
import NotificacaoCard from '../componentes/conteiner.notificacao';
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
const notificacoes = [
    { tipo: 'novo_curso', mensagem: 'Novo curso de React Native disponível!', data: '2 dias atrás', lida: false },
    { tipo: 'novo_comentario', mensagem: 'João comentou na sua proposta.', data: '1 dia atrás', lida: false },
    { tipo: 'curtida', mensagem: 'Maria curtiu sua proposta.', data: '3 horas atrás', lida: true },
];
const Notificacoes = () => {
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsx(Cabecalho, {}), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', minHeight: '100vh' }, children: [_jsxs(Container, { sx: { mt: 10, mb: 8, flexGrow: 1 }, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Notifica\u00E7\u00F5es" }), notificacoes.map((notificacao, index) => (_jsx(NotificacaoCard, { tipo: notificacao.tipo, mensagem: notificacao.mensagem, data: notificacao.data, lida: notificacao.lida }, index)))] }), _jsx(Footer, {})] })] }));
};
export default Notificacoes;
