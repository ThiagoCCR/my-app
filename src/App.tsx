import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './App.styles';
import { HomePageWelcomeMessage } from './components/HomePageWelcomeMessage';
import { SignInForm } from './components/SignInForm';
import { Home } from './pages/Home';
import { Userpage } from './pages/Userpage/Userpage';

const App: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Home message={HomePageWelcomeMessage} />} path="/" />
          <Route element={<Home message={SignInForm} />} path="/sign-in" />
          <Route element={<Userpage />} path="/userpage" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
