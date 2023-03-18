import { FC } from 'react';

import { Wrapper } from './HomePageWelcomeMessage.styles';

export const HomePageWelcomeMessage: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>O seu repositório de redações!</h1>
    </Wrapper>
  );
};
