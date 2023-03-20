import { SearchError } from '../config/consts/errorMessages';
import { EssayInterface, getEssayById } from './essaysService';

interface AuthResponse {
  token: string;
  studentId: string;
}

const auth = JSON.parse(localStorage.getItem('writer') || '{}') as AuthResponse;

export type EssayWithUrl = EssayInterface & {
  url: string;
};

const addUrlToEssays = (
  essays: EssayInterface[]
): Promise<EssayWithUrl>[] | [] => {
  try {
    const essaysData = essays.map(async (essay) => {
      const response = await getEssayById(essay.id, auth.token);
      return { ...essay, url: response.data.urls[0].url };
    });
    return essaysData;
  } catch (error) {
    console.error(SearchError);
  }
  return [];
};

export function sortEssays(
  page: number,
  essays: EssayInterface[]
): Promise<EssayWithUrl>[] | [] {
  const pageLength = 4;
  const startEssay = (page - 1) * pageLength;
  const endEssay = startEssay + pageLength;
  const sortedArrays = essays.slice(startEssay, endEssay);
  return addUrlToEssays(sortedArrays);
}
