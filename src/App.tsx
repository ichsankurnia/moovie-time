import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Movies from './page/Movies';
import NotFound from './page/NotFound';
import Footer from './component/Footer';
import MovieDetail from './page/MovieDetail';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <>
      <BrowserRouter>
        {/* <div className='font-montserrat flex flex-col overflow-x-hidden overflow-y-auto bg-movie-3 h-screen'> */}
        <div className='font-montserrat flex flex-col overflow-x-hidden overflow-y-auto h-screen'>


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:slug' element={<MovieDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <Footer />

        </div>
      </BrowserRouter>

    </>
  );
}

export default App;