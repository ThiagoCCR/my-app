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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  height: 2.5rem;
  color: #ffffff;
  background-color: rgb(248, 150, 21);
  border: none;
  font-weight: 700;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  width: 8rem;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
