import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { School, Comment, ThumbUp } from '@mui/icons-material';
const getNotificationStyle = (tipo) => {
    switch (tipo) {
        case 'novo_curso':
            return { icon: _jsx(School, {}), color: '#BB86FC' };
        case 'novo_comentario':
            return { icon: _jsx(Comment, {}), color: '#03DAC6' };
        case 'curtida':
            return { icon: _jsx(ThumbUp, {}), color: '#CF6679' };
        default:
            return { icon: null, color: '#FFFFFF' };
    }
};
const NotificacaoCard = ({ tipo, mensagem, data, lida = false }) => {
    const { icon, color } = getNotificationStyle(tipo);
    return (_jsxs(Card, { sx: {
            mb: 2,
            display: 'flex',
            alignItems: 'stretch',
            backgroundColor: lida ? '#1E1E1E' : '#2A2A2A',
            borderLeft: `5px solid ${color}`,
            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.3)',
            }
        }, children: [_jsx(Box, { sx: { display: 'flex', alignItems: 'center', p: 2, backgroundColor: 'rgba(0,0,0,0.1)' }, children: _jsx(Avatar, { sx: { bgcolor: 'transparent', color: color }, children: icon }) }), _jsxs(CardContent, { sx: { flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }, children: [_jsx(Typography, { variant: "body1", sx: { color: '#E0E0E0', fontWeight: lida ? 'normal' : 'bold' }, children: mensagem }), _jsx(Typography, { variant: "caption", sx: { color: '#A0A0A0', mt: 0.5 }, children: data })] })] }));
};
export default NotificacaoCard;
