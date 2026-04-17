
import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexto/contexto.autenticacao';
import RotaProtegida from './routes/RotaProtegida';

// Carregamento dinâmico (lazy loading) para todas as páginas
const Login = lazy(() => import('./paginas/Login'));
const CompletarPerfil = lazy(() => import('./paginas/CompletarPerfil'));
const Cursos = lazy(() => import('./paginas/Cursos'));
const ConteudoCurso = lazy(() => import('./paginas/ConteudoCurso'));
const CriarProposta = lazy(() => import('./paginas/CriarProposta'));
const Notificacoes = lazy(() => import('./paginas/Notificacoes'));
const MeusCursos = lazy(() => import('./paginas/MeusCursos'));
const MeuPerfil = lazy(() => import('./paginas/MeuPerfil'));
const PesquisaCursos = lazy(() => import('./paginas/PesquisaCursos'));
const ConfiguracoesCurso = lazy(() => import('./paginas/ConfiguracoesCurso').then(m => ({ default: m.ConfiguracoesCurso })));
const ConfiguracoesApp = lazy(() => import('./paginas/ConfiguracoesApp').then(m => ({ default: m.ConfiguracoesApp })));
const Aula = lazy(() => import('./paginas/Aula'));
const CursoPreview = lazy(() => import('./paginas/CursoPreview'));
const Provedores = lazy(() => import('./paginas/Provedores').then(m => ({ default: m.Provedores })));
const HistoricoFinanceiro = lazy(() => import('./paginas/HistoricoFinanceiro').then(m => ({ default: m.HistoricoFinanceiro })));
const EditorNota = lazy(() => import('./paginas/EditorNota'));
const VisualizadorMidia = lazy(() => import('./paginas/VisualizadorMidia'));

// Componente de redirecionamento que não deve ser lazy-loaded, pois é crítico para o boot inicial
const PaginaInicial = () => {
  const { user, token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    // Idealmente, um loader aqui, mas a RotaProtegida já tem um loader global
    return <Navigate to="/login" replace />;
  }

  return user.perfilCompleto
    ? <Navigate to="/cursos" replace />
    : <Navigate to="/completar-perfil" replace />;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PaginaInicial />} />

      <Route element={<RotaProtegida />}>
        <Route path="/completar-perfil" element={<CompletarPerfil />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<CursoPreview />} />
        <Route path="/conteudo-curso/:id" element={<ConteudoCurso />} />
        <Route path="/criar-proposta" element={<CriarProposta />} />
        <Route path="/curso/:id/configuracoes" element={<ConfiguracoesCurso />} />
        <Route path="/curso/:id/aula/:aulaId" element={<Aula />} />
        <Route path="/curso/:id/aula/:aulaId/nova-nota" element={<EditorNota />} />
        <Route path="/curso/preview/:id" element={<CursoPreview />} />
        <Route path="/curso/:id/media" element={<VisualizadorMidia />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/meus-cursos" element={<MeusCursos />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/pesquisar-cursos" element={<PesquisaCursos />} />
        <Route path="/configuracoes-app" element={<ConfiguracoesApp />} />
        <Route path="/provedores" element={<Provedores />} />
        <Route path="/historico-financeiro" element={<HistoricoFinanceiro />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
