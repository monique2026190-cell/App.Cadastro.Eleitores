import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Notifications, School, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    return (_jsx(Paper, { sx: { position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }, elevation: 3, children: _jsxs(BottomNavigation, { showLabels: true, value: value, onChange: (event, newValue) => {
                setValue(newValue);
                switch (newValue) {
                    case 0:
                        navigate('/cursos');
                        break;
                    case 1:
                        navigate('/meus-cursos');
                        break;
                    case 2:
                        navigate('/notificacoes');
                        break;
                    case 3:
                        navigate('/meu-perfil');
                        break;
                }
            }, children: [_jsx(BottomNavigationAction, { label: "In\u00EDcio", icon: _jsx(Home, {}) }), _jsx(BottomNavigationAction, { label: "Meus Cursos", icon: _jsx(School, {}) }), _jsx(BottomNavigationAction, { label: "Notifica\u00E7\u00F5es", icon: _jsx(Notifications, {}) }), _jsx(BottomNavigationAction, { label: "Meu Perfil", icon: _jsx(Person, {}) })] }) }));
};
export default Footer;
