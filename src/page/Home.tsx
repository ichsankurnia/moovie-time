import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import MovieCard from '../component/MovieCard';
import SliderSection from '../component/SliderSection';
import { FILM_LIST } from '../dummyData';

type Props = {};

const Home: React.FC<Props> = () => {
    const [movieList, setMovieList] = useState(FILM_LIST.slice(0, 10))
    const [popularity, setPopularity] = useState(true)

    const navigate = useNavigate()

    const handleOrderMovie = (popularity: boolean) => {
        setPopularity(popularity)

        if(popularity){
            setMovieList(FILM_LIST.slice(0, 10))
        }else{
            setMovieList([...movieList].sort((a,b) => Number(b.release) - Number(a.release)))
        }
    }

    return (
        <>
            <div className='bg-movie-3'>
                <Header />

                <div className='bg-movie-4 w-full pt-12 pb-5'>
                    <SliderSection />
                </div>

                <div className='max-w-desk w-full mx-auto my-10 px-5 2xl:px-0'>
                    <div className='flex items-center justify-between text-movie-1 flex-col md:flex-row'>
                        <div className='flex flex-col font-semibold text-2xl'>
                            <span className='bg-rose-500 h-1.5 w-32 rounded-full mb-2'></span>
                            <h2>Discover Movies</h2>
                        </div>
                        <div className='flex items-center space-x-4 text-sm mt-5 md:mt-0'>
                            <button className={`py-1.5 px-5 rounded-full ${popularity? 'bg-rose-500': 'bg-movie-4'} hover-opacity`} onClick={()=>handleOrderMovie(true)}>Popularity</button>
                            <button className={`py-2 px-4 rounded-full ${!popularity? 'bg-rose-500': 'bg-movie-4'} hover-opacity`} onClick={()=>handleOrderMovie(false)}>Release Date</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10'>
                        {movieList.map((item, key) =>
                            <MovieCard key={key} movie={item} onViewMovie={() => navigate('/movies/' + item.title.toLowerCase().replaceAll(' ', '-').replaceAll('%', '_'))} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;