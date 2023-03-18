import { createElement, FC } from 'react';

import homeImage from '../../assets/home-img.jpg';
import { Header } from '../../components/Header';
import { ImgContainer, Wrapper } from './Home.styles';

interface HomeProps {
  message: FC;
}

export const Home: FC<HomeProps> = ({ message }): JSX.Element => (
  <Wrapper>
    <Header />
    <ImgContainer>
      <img alt="HomePic" src={homeImage} />
      <div>
        <h1>Writer</h1>
      </div>
    </ImgContainer>
    {createElement(message)}
  </Wrapper>
);
