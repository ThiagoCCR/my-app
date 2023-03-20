import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 10rem;
  width: 8rem;
  background-color: #ffffff;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    font-family: Righteous, cursive;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
