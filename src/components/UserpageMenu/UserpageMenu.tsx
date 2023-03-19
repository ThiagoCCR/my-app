import { FC, FormEventHandler, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

import { SearchError } from '../../config/consts/errorMessages';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledSelect,
  Wrapper,
} from './UserpageMenu.style';

export const UserpageMenu: FC = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchMode, setSearchMode] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleSearch: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      if (searchMode === 'essay') {
        // serach essay by id
      } else {
        // serach essay by student
      }
    } catch (err) {
      console.error(SearchError);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSearch}>
        <div>
          <StyledInput
            name="searchBar"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Pesquisar redação"
            required
            value={searchText}
          />
          <StyledButton type="submit">
            <IoSearchSharp color="#ffffff" font-size="1.5rem" />
          </StyledButton>
        </div>
        <StyledSelect onChange={(e) => setSearchMode(e.target.value)}>
          <option disabled hidden selected value="">
            Procurar usando
          </option>
          <option value="essay">Número da redação</option>
          <option value="student">Identificação do aluno</option>
        </StyledSelect>{' '}
      </StyledForm>
    </Wrapper>
  );
};
