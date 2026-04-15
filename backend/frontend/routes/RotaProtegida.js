import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexto/contexto.autenticacao';
/**
 * Um componente que renderiza o conteúdo da rota (via <Outlet />)
 * se o usuário estiver autenticado (ou seja, se houver um token).
 * Caso contrário, redireciona o usuário para a página de login.
 */
const RotaProtegida = () => {
    const { token } = useAuth();
    // Se não houver token, redireciona para a página de login
    if (!token) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    // Se houver um token, renderiza o componente filho da rota
    return _jsx(Outlet, {});
};
export default RotaProtegida;
