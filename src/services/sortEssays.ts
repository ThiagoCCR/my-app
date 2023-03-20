/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { EssayInterface, getEssayById } from './essaysService';

interface AuthResponse {
  token: string;
  studentId: string;
}

const auth = JSON.parse(localStorage.getItem('writer') || '{}') as AuthResponse;

export type EssayWithUrl = EssayInterface & {
  url: string;
};

const addUrlToEssays = (essays: EssayInterface[]) => {
  return Promise.all(
    essays.map(async (essay) => {
      const response = await getEssayById(essay.id, auth.token);
      const finalEssay = { ...essay, url: response.urls[0].url };
      return finalEssay;
    })
  );
};

export async function sortEssays(
  page: number,
  essays: EssayInterface[]
): Promise<EssayWithUrl[]> {
  const pageLength = 4;
  const startEssay = (page - 1) * pageLength;
  const endEssay = startEssay + pageLength;
  const sortedArrays = essays.slice(startEssay, endEssay);
  const response = await addUrlToEssays(sortedArrays);
  return response;
}
