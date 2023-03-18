import { FC } from 'react';

import homeImage from '../../assets/home-img.jpg';
import { Header } from '../../components/Header';
import { HomePageWelcomeMessage } from '../../components/HomePageWelcomeMessage';
import { ImgContainer, Wrapper } from './Home.styles';

export const Home: FC = (): JSX.Element => (
  <Wrapper>
    <Header />
    <ImgContainer>
      <img alt="HomePic" src={homeImage} />
      <div>
        <h1>Writer</h1>
      </div>
    </ImgContainer>
    <HomePageWelcomeMessage />
  </Wrapper>
);
