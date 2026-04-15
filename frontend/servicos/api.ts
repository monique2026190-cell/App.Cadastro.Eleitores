import axios, { AxiosResponse } from 'axios';
import { logger } from '../logs/app.log';
import { env } from '../config/env';
import { isValidResponse } from '../utils/apiResponse';

// Cria a instância do Axios com a URL base da API
const api = axios.create({
  baseURL: env.apiUrl,
});

// Adiciona o interceptor de resposta para validar e logar automaticamente
api.interceptors.response.use(
  // --- Interceptor de Sucesso ---
  (response: AxiosResponse) => {
    // Valida se a resposta, mesmo que bem-sucedida (status 2xx), tem um corpo de dados válido.
    if (!isValidResponse(response)) {
      // Se a resposta for inválida (ex: data: null), rejeita a promise.
      // Isso força o erro a ser tratado no bloco .catch() da chamada da API.
      logger.error('api.invalid.response', {
        url: response.config?.url,
        status: response.status,
        data: response.data,
      });
      // Rejeita a promise com um erro padronizado
      return Promise.reject(new Error('Resposta da API inválida ou vazia.'));
    }

    // Se a resposta for válida, apenas a repassa.
    return response;
  },

  // --- Interceptor de Erro ---
  (error) => {
    // Verifica se o erro é uma resposta de erro do Axios (status 4xx, 5xx)
    if (error.response) {
      logger.error('api.error', {
        url: error.config?.url,
        status: error.response?.status,
        data: error.response?.data,
        method: error.config?.method,
      });
    } else if (error.request) {
      // O erro ocorreu na requisição (ex: sem resposta do servidor)
      logger.error('api.request.error', {
        message: 'Nenhuma resposta recebida do servidor.',
        url: error.config?.url,
        method: error.config?.method,
      });
    } else {
      // O erro ocorreu ao configurar a requisição
      logger.error('api.config.error', {
        message: error.message,
      });
    }

    // Rejeita a promise para que o erro possa ser tratado pelo código que fez a chamada
    return Promise.reject(error);
  }
);

export default api;
