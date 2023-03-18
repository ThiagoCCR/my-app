import { FC } from 'react';
import { IoEnterOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { HeaderButtons, Wrapper } from './Header.styles';

export const Header: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>WRITER</h1>
      <HeaderButtons>
        <span>SOBRE</span>
        <span>BLOG</span>
        <Link to="/sign-in">
          <span>
            ENTRAR <IoEnterOutline />
          </span>
        </Link>
      </HeaderButtons>
    </Wrapper>
  );
};
