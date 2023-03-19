import api from './api';

export interface EssayInterface {
  id: string;
  aluno: object;
  escola: object;
  numero: number;
  created_at: string;
}

export async function getStudentEssays(studentId: string, token: string) {
  const response = await api.get(`/index/aluno/${studentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data as EssayInterface[];
}
