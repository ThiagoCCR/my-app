import api from './api';

export interface authResponse {
  aluno_id: string | null;
  acess_token: string;
  token_type: string;
  expires_at: string;
}

export async function signIn(
  email: string,
  password: string
): Promise<authResponse> {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
}
