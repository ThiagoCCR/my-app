import { FC } from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { StyledButton, Wrapper } from './UserpageMenu.style';

export const UserpageMenu: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const infoJSON = JSON.stringify({});
    localStorage.setItem('writer', infoJSON);
    navigate('/');
  };

  return (
    <Wrapper>
      <StyledButton>NOVA REDAÇÃO</StyledButton>
      <StyledButton>DELETAR</StyledButton>
      <StyledButton>EDITAR</StyledButton>
      <StyledButton onClick={handleLogout}>
        <span>
          SAIR <IoExitOutline />
        </span>
      </StyledButton>
    </Wrapper>
  );
};
