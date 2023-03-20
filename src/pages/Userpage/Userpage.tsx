import { FC, useCallback, useEffect, useState } from 'react';

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
} from './Userpage.style';

interface AuthResponse {
  token: string;
  studentId: string;
}

export const Userpage: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [essays, setEssays] = useState<Promise<EssayWithUrl>[] | []>([]);
  const auth = JSON.parse(
    localStorage.getItem('writer') || '{}'
  ) as AuthResponse;

  const renderEssays = useCallback(async () => {
    let essaysData;
    let sortedEssays;
    try {
      if (auth.studentId) {
        essaysData = await getStudentEssays(auth.studentId, auth.token);
        sortedEssays = sortEssays(page, essaysData);
        setEssays(sortedEssays);
      } else {
        essaysData = await getEssaysForAdmin(auth.token);
        sortedEssays = sortEssays(page, essaysData);
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
        <Essay />
        <Essay />
        <Essay />
      </EssaysContainer>
      <EssaysViewer>
        <UserpageMenu />
      </EssaysViewer>
    </Wrapper>
  );
};
