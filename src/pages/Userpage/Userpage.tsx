import { FC, useCallback, useEffect } from 'react';

import { Essay } from '../../components/Essay';
import { UserpageMenu } from '../../components/UserpageMenu';
import { EssayInterface, getStudentEssays } from '../../services/essaysService';
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
  const { token, studentId } = JSON.parse(
    localStorage.getItem('writer') || '{}'
  ) as AuthResponse;

  const renderEssays = useCallback(async () => {
    if (studentId) {
      const essaysData = await getStudentEssays(studentId, token);
    } else {
      // asdasd
    }
  }, [studentId, token]);

  useEffect(() => {
    renderEssays();
  }, [renderEssays]);

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
