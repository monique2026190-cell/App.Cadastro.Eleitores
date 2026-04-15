import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Container, Typography, Box, CssBaseline, GlobalStyles, IconButton, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../componentes/Footer';
import CardInformacaoPerfil from '../componentes/card.informacoes.perfil';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../componentes/Cabecalho';
import { useAuth } from '../contexto/contexto.autenticacao';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
        primary: {
            main: '#90CAF9',
        },
    },
});
const MeuPerfil = () => {
    const navigate = useNavigate();
    const { token, logout } = useAuth(); // Obtém o token e a função de logout do contexto
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) {
                setError("Autenticação necessária.");
                return;
            }
            try {
                const response = await fetch('/api/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Falha ao buscar dados do perfil. Token inválido ou expirado.');
                }
                const data = await response.json();
                setProfile(data.user);
            }
            catch (err) {
                console.error(err);
                setError(err.message);
                if (err.message.includes('Token')) {
                    logout();
                }
            }
        };
        fetchProfile();
    }, [token, logout]);
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212" } } }), _jsx(Cabecalho, {}), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', minHeight: '100vh' }, children: [_jsxs(Container, { sx: { mt: 10, mb: 8, flexGrow: 1 }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Meu Perfil" }), _jsxs("div", { children: [_jsx(IconButton, { color: "primary", onClick: () => navigate('/configuracoes-app'), sx: { mr: 1 }, children: _jsx(SettingsIcon, {}) }), _jsx(Button, { variant: "outlined", color: "primary", startIcon: _jsx(LogoutIcon, {}), onClick: logout, children: "Logout" })] })] }), error && _jsxs(Typography, { color: "error", children: ["Erro: ", error] }), profile ? (_jsx(CardInformacaoPerfil, { nome: profile.name })) : (!error && _jsx(Typography, { children: "Carregando perfil..." }))] }), _jsx(Footer, {})] })] }));
};
export default MeuPerfil;
