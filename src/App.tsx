import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './App.styles';
import { HomePageWelcomeMessage } from './components/HomePageWelcomeMessage';
import { SignInForm } from './components/SignInForm';
import { SignUpForm } from './components/Signup';
import { Home } from './pages/Home';

const App: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Home message={HomePageWelcomeMessage} />} path="/" />
          <Route element={<Home message={SignInForm} />} path="/sign-in" />
          <Route element={<Home message={SignUpForm} />} path="/sign-up" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
