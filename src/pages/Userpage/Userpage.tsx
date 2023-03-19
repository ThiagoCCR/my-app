import { FC } from 'react';

import { Essay } from '../../components/Essay';
import { UserpageMenu } from '../../components/UserpageMenu';
import {
  Wrapper,
  EssaysContainer,
  EssaysViewer,
  SiteLogo,
} from './Userpage.style';

// interface AuthModel {
//   user: string;
//   token: string;
// }
export const Userpage: FC = (): JSX.Element => {
  // const auth = JSON.parse(localStorage.getItem('writer') || '{}') as AuthModel;
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
