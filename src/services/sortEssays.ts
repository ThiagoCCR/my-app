import { EssayInterface, getEssayById } from './essaysService';

interface AuthResponse {
  token: string;
  studentId: string;
}

export type EssayWithUrl = EssayInterface & {
  url: string;
};

const addUrlToEssays = (essays: EssayInterface[]) => {
  const auth = JSON.parse(
    localStorage.getItem('writer') || '{}'
  ) as AuthResponse;

  return Promise.all(
    essays.map(async (essay) => {
      const response = await getEssayById(essay.id, auth.token);
      if (response.data.urls?.length > 0) {
        const finalEssay = { ...essay, url: response.data.urls[0].url };
        return finalEssay;
      }
      return { ...essay, url: '' };
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
