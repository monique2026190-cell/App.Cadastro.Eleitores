import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './paginas/Login';
import CompletarPerfil from './paginas/CompletarPerfil';
import Cursos from './paginas/Cursos';
import DetalhesCurso from './paginas/DetalhesCurso';
import ConteudoCurso from './paginas/ConteudoCurso';
import CriarProposta from './paginas/CriarProposta';
import Notificacoes from './paginas/Notificacoes';
import MeusCursos from './paginas/MeusCursos';
import MeuPerfil from './paginas/MeuPerfil';
import PesquisaCursos from './paginas/PesquisaCursos';
import ConfiguracoesCurso from './paginas/ConfiguracoesCurso';
import ConfiguracoesApp from './paginas/ConfiguracoesApp';
import RotaProtegida from './routes/RotaProtegida'; // Importe o componente de rota protegida
import { useAuth } from './contexto/contexto.autenticacao';
// Um componente para lidar com a rota raiz
const PaginaInicial = () => {
    const { token } = useAuth();
    // Se o usuário estiver logado, redireciona para a página de cursos.
    // Caso contrário, redireciona para a página de login.
    return token ? _jsx(Navigate, { to: "/cursos", replace: true }) : _jsx(Navigate, { to: "/login", replace: true });
};
const AppRoutes = () => {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/", element: _jsx(PaginaInicial, {}) }), _jsxs(Route, { element: _jsx(RotaProtegida, {}), children: [_jsx(Route, { path: "/completar-perfil", element: _jsx(CompletarPerfil, {}) }), _jsx(Route, { path: "/cursos", element: _jsx(Cursos, {}) }), _jsx(Route, { path: "/curso/:id", element: _jsx(DetalhesCurso, {}) }), _jsx(Route, { path: "/conteudo-curso/:id", element: _jsx(ConteudoCurso, {}) }), _jsx(Route, { path: "/criar-proposta", element: _jsx(CriarProposta, {}) }), _jsx(Route, { path: "/curso/:id/configuracoes", element: _jsx(ConfiguracoesCurso, {}) }), _jsx(Route, { path: "/notificacoes", element: _jsx(Notificacoes, {}) }), _jsx(Route, { path: "/meus-cursos", element: _jsx(MeusCursos, {}) }), _jsx(Route, { path: "/meu-perfil", element: _jsx(MeuPerfil, {}) }), _jsx(Route, { path: "/pesquisar-cursos", element: _jsx(PesquisaCursos, {}) }), _jsx(Route, { path: "/configuracoes-app", element: _jsx(ConfiguracoesApp, {}) })] })] }) }));
};
export default AppRoutes;
