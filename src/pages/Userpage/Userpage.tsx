import { FC } from 'react';

import { Essay } from '../../components/Essay';
import { UserpageMenu } from '../../components/UserpageMenu';
import { Wrapper, EssaysContainer, EssaysViewer } from './Userpage.style';

export const Userpage: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <EssaysContainer>
        <Essay />
        <Essay />
        <Essay />
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
