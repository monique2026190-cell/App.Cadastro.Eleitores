import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Category, CreateNewFolder, Publish } from '@mui/icons-material';
const BotaoPublicarConteudo = ({ id }) => {
    const navigate = useNavigate();
    const actions = [
        { icon: _jsx(CreateNewFolder, {}), name: 'Criar Pasta', handler: () => navigate(`/criar-pasta/${id}`) },
        { icon: _jsx(Publish, {}), name: 'Publicar Conteúdo', handler: () => navigate(`/criar-conteudo/${id}`) },
        { icon: _jsx(Category, {}), name: 'Criar Categoria', handler: () => navigate(`/criar-categoria/${id}`) },
    ];
    return (_jsx(SpeedDial, { ariaLabel: "SpeedDial para cria\u00E7\u00E3o de conte\u00FAdo", sx: { position: 'fixed', bottom: 80, right: 30 }, icon: _jsx(SpeedDialIcon, {}), children: actions.map((action) => (_jsx(SpeedDialAction, { icon: action.icon, tooltipTitle: action.name, onClick: action.handler, sx: {
                bgcolor: '#1a1d24',
                color: '#ffffff',
                '&:hover': {
                    bgcolor: '#2a2d34'
                }
            } }, action.name))) }));
};
export default BotaoPublicarConteudo;
