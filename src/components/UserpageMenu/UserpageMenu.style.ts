import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  height: 5rem;
  background-color: #1d2c3d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  > div {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }
`;

export const StyledInput = styled.input`
  font-weight: 400;
  border: none;
  font-size: 1rem;
  width: 15rem;
  height: 2rem;
  border-radius: 0.5rem;
  color: #000000;
  background-color: #ffffff;
  padding-left: 1rem;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  font-weight: 400;
  border: none;
  font-size: 1rem;
  width: 15rem;
  height: 2rem;
  border-radius: 0.5rem;
  color: #000000;
  background-color: #ffffff;
  padding-left: 1rem;
  cursor: pointer;
`;
