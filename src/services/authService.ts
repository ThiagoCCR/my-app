import api from './api';

export interface AuthResponse {
  aluno_id: string | null;
  access_token: string;
  token_type: string;
  expires_at: string;
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  const response = await api.post('/auth/login', {
    email,
    password,
  });
  return response.data as AuthResponse;
}
