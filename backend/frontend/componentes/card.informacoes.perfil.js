import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
const CardInformacaoPerfil = ({ nome, avatarUrl }) => {
    return (_jsx(Card, { sx: { mb: 4 }, children: _jsx(CardContent, { children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Avatar, { src: avatarUrl, sx: { width: 80, height: 80, mr: 2 } }), _jsx(Typography, { variant: "h5", children: nome })] }) }) }));
};
export default CardInformacaoPerfil;
