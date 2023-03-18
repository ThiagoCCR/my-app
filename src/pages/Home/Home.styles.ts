import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background-color: #1d2c3d;
  display: flex;
  flex-direction: row;
`;

export const ImgContainer = styled.div`
  position: relative;
  img {
    width: 60vw;
    height: 100vh;
  }
  div {
    background-color: #fee4b1;
    right: 0;
    top: 25%;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  h1 {
    font-size: 5rem;
    line-height: 6rem;
    font-family: 'Fasthand', cursive;
    color: #c26700;
  }
`;
