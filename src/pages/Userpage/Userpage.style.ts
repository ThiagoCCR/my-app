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
`;
