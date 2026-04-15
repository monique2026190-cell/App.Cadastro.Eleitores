import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Container, Typography, Box, Paper, CssBaseline, GlobalStyles, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../contexto/contexto.autenticacao';
import { env } from '../config/env';
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
const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isGoogleAuthConfigured = env.googleClientId && !env.googleClientId.includes('SEU_GOOGLE_CLIENT_ID');
    const handleGoogleSuccess = (credentialResponse) => {
        if (credentialResponse.credential) {
            login(credentialResponse.credential);
        }
    };
    const handleGoogleError = () => {
        console.error('Login com Google falhou');
    };
    const handleEmailPasswordLogin = (event) => {
        event.preventDefault();
        // Here you would typically call a login function from your auth context
        // For now, we'll just log the credentials
        console.log({ email, password });
        // Example: login(email, password);
    };
    return (_jsxs(ThemeProvider, { theme: darkTheme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { body: { backgroundColor: "#121212", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' } } }), _jsx(Container, { component: "main", maxWidth: "xs", children: _jsxs(Paper, { elevation: 6, sx: { padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [_jsx(Typography, { component: "h1", variant: "h5", sx: { mb: 3 }, children: "Login" }), _jsxs(Box, { component: "form", onSubmit: handleEmailPasswordLogin, noValidate: true, sx: { mt: 1 }, children: [_jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "email", label: "Endere\u00E7o de e-mail", name: "email", autoComplete: "email", autoFocus: true, value: email, onChange: (e) => setEmail(e.target.value) }), _jsx(TextField, { margin: "normal", required: true, fullWidth: true, name: "password", label: "Senha", type: "password", id: "password", autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 }, children: "Entrar" })] }), _jsx(Box, { children: isGoogleAuthConfigured ? (_jsx(GoogleLogin, { onSuccess: handleGoogleSuccess, onError: handleGoogleError, theme: "filled_black", text: "signin_with", shape: "rectangular" })) : (_jsxs(Box, { sx: { textAlign: 'center', p: 2, border: '1px dashed grey', borderRadius: 1 }, children: [_jsx(Typography, { variant: "body2", color: "textSecondary", children: "A autentica\u00E7\u00E3o do Google n\u00E3o est\u00E1 configurada." }), _jsxs(Typography, { variant: "caption", color: "textSecondary", children: ["Para habilitar o login, defina ", _jsx("code", { children: "VITE_GOOGLE_CLIENT_ID" }), " no seu arquivo ", _jsx("code", { children: ".env" }), "."] })] })) })] }) })] }));
};
export default Login;
