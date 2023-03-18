import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './App.styles';
import { Home } from './pages/Home';

const App: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
      <div />
    </>
  );
};

export default App;
