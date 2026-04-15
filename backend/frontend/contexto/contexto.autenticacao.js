import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext } from 'react';
import { env } from '../config/env'; // Importa a configuração de ambiente
import log from '../logs/app.log'; // Importa a função de log
// Cria o contexto de autenticação com um valor padrão undefined
const AuthContext = createContext(undefined);
// Hook customizado para usar o contexto de autenticação
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};
// Componente Provedor que envolve a aplicação
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null); // Dados do usuário podem ser carregados do token/API
    // Função para realizar o login
    const login = async (credential) => {
        await log('Tentativa de login');
        try {
            // Constrói a URL completa da API usando a variável de ambiente
            const apiUrl = `${env.apiUrl}/api/auth/google`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ credential }),
            });
            if (!response.ok) {
                throw new Error('Falha na autenticação com o backend');
            }
            const { token: newToken } = await response.json();
            setToken(newToken);
            localStorage.setItem('token', newToken);
            await log('Login bem-sucedido');
            // Opcional: decodificar o token para obter dados do usuário e armazená-los no estado
            // const decodedUser = jwt_decode(newToken); // Usando uma biblioteca como jwt-decode
            // setUser(decodedUser);
        }
        catch (error) {
            console.error("Erro no processo de login:", error);
            await log(`Erro no processo de login: ${error}`);
            // Limpa o estado em caso de erro
            setToken(null);
            localStorage.removeItem('token');
            setUser(null);
            throw error; // Propaga o erro para o chamador lidar com a UI
        }
    };
    // Função para realizar o logout
    const logout = async () => {
        await log('Usuário deslogado');
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        // Redireciona para a página de login ou inicial
        window.location.href = '/login';
    };
    const value = {
        token,
        user,
        login,
        logout,
    };
    return _jsx(AuthContext.Provider, { value: value, children: children });
};
