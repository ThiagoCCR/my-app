import { createElement, FC } from 'react';
import { Navigate } from 'react-router-dom';

import homeImage from '../../assets/home-img.jpg';
import { Header } from '../../components/Header';
import { ImgContainer, Wrapper } from './Home.styles';

interface HomeProps {
  message: FC;
}

interface AuthModel {
  user: string;
  token: string;
}

export const Home: FC<HomeProps> = ({ message }): JSX.Element => {
  const auth = JSON.parse(localStorage.getItem('writer') || '{}') as AuthModel;

  if (auth.token) {
    return <Navigate to="/userpage" />;
  }

  return (
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
};
