import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
const BotaoConfiguracoesCurso = ({ id }) => {
    const navigate = useNavigate();
    return (_jsx(IconButton, { onClick: () => navigate(`/curso/${id}/configuracoes`), "aria-label": "configura\u00E7\u00F5es", children: _jsx(SettingsIcon, {}) }));
};
export default BotaoConfiguracoesCurso;
