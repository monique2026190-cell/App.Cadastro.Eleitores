import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography } from '@mui/material';
const DescricaoCursoCard = ({ descricao }) => {
    return (_jsx(Card, { sx: { bgcolor: 'background.paper', mt: 3 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h5", sx: { mb: 2 }, children: "Descri\u00E7\u00E3o do Curso" }), _jsx(Typography, { variant: "body1", children: descricao })] }) }));
};
export default DescricaoCursoCard;
