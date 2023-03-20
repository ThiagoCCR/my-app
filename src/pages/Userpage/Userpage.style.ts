import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const EssaysContainer = styled.div`
  min-height: 100vh;
  width: 15rem;
  display: grid;
  padding-top: 8rem;
  padding-bottom: 2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #1d2c3d;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SiteLogo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 5rem;
  padding-left: 3rem;
  background-color: #da6509;
  display: flex;
  align-items: center;
  z-index: 2;
  h1 {
    font-size: 2.5rem;
    font-family: 'Fasthand', cursive;
    color: #ffffff;
  }
`;

export const EssaysViewer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #b6bbc0;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilesContainer = styled.div`
  height: 32rem;
  width: 47rem;
  overflow-y: scroll;
  display: grid;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
  h1 {
    font-family: 'Righteous', cursive;
    color: #fff;
    font-size: 3rem;
  }
  img {
    height: 30rem;
    width: 45rem;
  }
`;

export const PageCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
  }
`;
