import { AxiosRequestConfig, AxiosResponse } from 'axios';

import api from './api';

export interface EssayInterface {
  id: string;
  aluno: object;
  escola: object;
  numero: number;
  created_at: string;
}

export interface EssayData {
  id: string;
  aluno: {
    id: string;
    nome_completo: string;
  };
  numero: number;
  created_at: string;
  urls: {
    id: string;
    redacao_id: string;
    correcao_id: string | null;
    url: string;
    anotacoes: string | null;
    comentarios: string | null;
  }[];
}

export async function getStudentEssays(studentId: string, token: string) {
  const response = await api.get<
    AxiosResponse<EssayInterface[], AxiosRequestConfig>
  >(`/index/aluno/${studentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
}

export async function getEssaysForAdmin(token: string) {
  const response = await api.get<
    AxiosResponse<EssayInterface[], AxiosRequestConfig>
  >(`/index/admin`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
}

export async function getEssayById(id: string, token: string) {
  const response = await api.get<AxiosResponse<EssayData, AxiosRequestConfig>>(
    `/redacao/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}
