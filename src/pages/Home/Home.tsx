import homeImage from '../../assets/home-img.jpg';
import { Wrapper } from './Home.styles';

export const Home = () => {
  return (
    <Wrapper>
      <img alt="HomePic" src={homeImage} />
    </Wrapper>
  );
};
