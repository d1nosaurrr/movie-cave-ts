import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './pages/header';
import { Main } from './pages/main';
import { MovieInfo } from './pages/movie-info';
import { Footer } from './pages/footer';
import { Page404 } from './pages/page404';

import { Loader } from './components/loader';
// @ts-ignore
import { Wrapper } from './components/wrapper';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Wrapper />} />
          <Route path='/movie/:id' element={<MovieInfo />} />
          <Route path='/search/' element={<Wrapper />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
