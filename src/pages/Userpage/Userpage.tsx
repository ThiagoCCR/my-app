import { FC, useCallback, useEffect, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import { Essay } from '../../components/Essay';
import { UserpageMenu } from '../../components/UserpageMenu';
import { SearchError } from '../../config/consts/errorMessages';
import {
  getEssaysForAdmin,
  getStudentEssays,
} from '../../services/essaysService';
import { EssayWithUrl, sortEssays } from '../../services/sortEssays';
import {
  Wrapper,
  EssaysContainer,
  EssaysViewer,
  SiteLogo,
  PageCounter,
} from './Userpage.style';

interface AuthResponse {
  token: string;
  studentId: string;
}

export const Userpage: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [essays, setEssays] = useState<EssayWithUrl[]>([]);
  const [essayViewed, setEssayViewed] = useState<string>('');
  const auth = JSON.parse(
    localStorage.getItem('writer') || '{}'
  ) as AuthResponse;

  const handlePageChange = (operation: string) => {
    if (operation === 'add') {
      setPage(page + 1);
    } else if (page > 1 && operation === 'subtract') {
      setPage(page - 1);
    }
  };

  const renderEssays = useCallback(async () => {
    let essaysData;
    let sortedEssays;
    try {
      if (auth.studentId) {
        essaysData = await getStudentEssays(auth.studentId, auth.token);
        sortedEssays = await sortEssays(page, essaysData);
        setEssays(sortedEssays);
      } else {
        essaysData = await getEssaysForAdmin(auth.token);
        sortedEssays = await sortEssays(page, essaysData);
        setEssays(sortedEssays);
      }
    } catch (error) {
      console.error(SearchError);
    }
  }, [page, auth.studentId, auth.token]);

  useEffect(() => {
    renderEssays();
  }, [renderEssays, page]);

  return (
    <Wrapper>
      <EssaysContainer>
        <SiteLogo>
          <h1>Writer</h1>
        </SiteLogo>
        {essays.map((curr) => (
          <Essay
            key=""
            handleClick={setEssayViewed}
            imgUrl={curr.url}
            school={curr.escola}
            student={curr.aluno}
          />
        ))}
        <PageCounter>
          <IoChevronBackOutline
            color="#ffffff"
            onClick={() => handlePageChange('subtract')}
          />
          <div>{page}</div>
          <IoChevronForwardOutline
            color="#ffffff"
            onClick={() => handlePageChange('add')}
          />
        </PageCounter>
      </EssaysContainer>
      <EssaysViewer>
        <UserpageMenu />
        {essayViewed === '' ? (
          <h1>Selecione uma redação para visualiza-la!</h1>
        ) : (
          <img alt="selectedEssay" src={essayViewed} />
        )}
      </EssaysViewer>
    </Wrapper>
  );
};
