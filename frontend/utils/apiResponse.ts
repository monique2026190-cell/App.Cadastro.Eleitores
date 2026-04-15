type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Tipo base de resposta HTTP (ex: Axios)
type HttpResponse<T = any> = {
  data?: T;
};

// Valida se a resposta tem dados válidos
export function isValidResponse<T>(
  response: HttpResponse<T>
): response is { data: T } {
  return response?.data !== undefined && response?.data !== null;
}

// Valida se existe um "user" dentro da resposta
export function hasUser<T extends { user?: any }>(
  response: HttpResponse<T>
): response is { data: { user: any } } {
  return response?.data?.user !== undefined && response?.data?.user !== null;
}

// Wrapper para padronizar resposta
export function parseResponse<T>(response: HttpResponse<T>): ApiResponse<T> {
  if (!response?.data) {
    return {
      success: false,
      error: 'Resposta inválida ou vazia',
    };
  }

  return {
    success: true,
    data: response.data,
  };
}

// 🔥 Melhor versão: segura e flexível
export function getUserFromResponse<T extends { id?: string }>(
  response: HttpResponse<T | { user: T }>
): T {
  if (!response?.data) {
    throw new Error('Resposta sem data');
  }

  const possibleUser = (response.data as any).user ?? response.data;

  if (!possibleUser || !possibleUser.id) {
    throw new Error('Usuário inválido na resposta');
  }

  return possibleUser;
}