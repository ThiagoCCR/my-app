import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const EssaysContainer = styled.div`
  min-height: 100vh;
  width: 20rem;
  display: grid;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #1d2c3d;
  overflow-y: scroll;
`;

export const EssaysViewer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #b6bbc0;
`;
