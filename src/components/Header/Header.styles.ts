import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  right: 0;
  left: 0;
  height: 3rem;
  background-color: #4a5663;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  > h1 {
    font-family: 'Fasthand', cursive;
    font-weight: 700;
    color: #f89615;
    font-size: 1.7rem;
    padding-left: 2rem;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-around;
  align-items: center;
  span {
    color: #fee4b1;
    font-weight: 700;
    text-transform: uppercase;
    transition: background 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    line-height: 1.5rem;
    padding: 0 0.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
      color: #1d2c3d;
      background-color: #fee4b1;
    }
  }
`;
