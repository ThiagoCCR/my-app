import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const StyledInput = styled.input`
  font-weight: 400;
  border: none;
  font-size: 1rem;
  width: 20rem;
  height: 3rem;
  border-radius: 5px;
  color: #000000;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding-left: 15px;
`;

export const StyledButton = styled.button`
  text-align: center;
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  color: #1d2c3d;
  font-weight: 700;
  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    background-color: #c26700;
    color: #ffffff;
  }
`;
