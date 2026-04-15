import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Button, Modal, Box, List, ListItem, ListItemText } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const CardMetodosPagamento = ({ open, onClose }) => {
    return (_jsx(Modal, { open: open, onClose: onClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsxs(Box, { sx: style, children: [_jsx(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", children: "M\u00E9todos de Pagamento" }), _jsxs(List, { children: [_jsx(ListItem, { button: true, children: _jsx(ListItemText, { primary: "Cart\u00E3o de Cr\u00E9dito" }) }), _jsx(ListItem, { button: true, children: _jsx(ListItemText, { primary: "Boleto Banc\u00E1rio" }) }), _jsx(ListItem, { button: true, children: _jsx(ListItemText, { primary: "PIX" }) })] }), _jsx(Button, { onClick: onClose, sx: { mt: 2 }, children: "Fechar" })] }) }));
};
export default CardMetodosPagamento;
