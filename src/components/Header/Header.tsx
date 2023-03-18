import { FC } from 'react';
import { IoEnterOutline } from 'react-icons/io5';

import { HeaderButtons, Wrapper } from './Header.styles';

export const Header: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>WRITER</h1>
      <HeaderButtons>
        <span>SOBRE</span>
        <span>BLOG</span>
        <span>
          ENTRAR <IoEnterOutline />
        </span>
      </HeaderButtons>
    </Wrapper>
  );
};
