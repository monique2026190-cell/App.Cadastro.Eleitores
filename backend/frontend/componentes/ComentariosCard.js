import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Box } from '@mui/material';
const ComentariosCard = ({ comments }) => {
    return (_jsx(Card, { sx: { bgcolor: 'background.paper', mt: 3 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h5", sx: { mb: 2 }, children: "Coment\u00E1rios" }), comments.map((comment, index) => (_jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 'bold' }, children: comment.user }), _jsx(Typography, { variant: "body2", children: comment.text })] }, index)))] }) }));
};
export default ComentariosCard;
