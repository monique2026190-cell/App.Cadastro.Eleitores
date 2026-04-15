import { jsx as _jsx } from "react/jsx-runtime";
import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from './logo';
const Cabecalho = () => {
    return (_jsx(AppBar, { position: "fixed", sx: {
            backgroundColor: 'rgba(30, 30, 30, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }, children: _jsx(Toolbar, { children: _jsx(Box, { sx: { flexGrow: 1, display: 'flex', justifyContent: 'center' }, children: _jsx(Logo, {}) }) }) }));
};
export default Cabecalho;
