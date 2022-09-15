import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
    movie: any,
    onViewMovie: (e: React.MouseEvent<HTMLElement>) => any
};

const MovieCard: React.FC<Props> = ({ movie, onViewMovie }) => {
    const [movieTitle, setMovieTitle] = useState('')

    return (
        <>
            <div className='flex flex-col relative font-semibold text-movie-1 cursor-pointer' onMouseEnter={() => setMovieTitle(movie.title)} onMouseLeave={() => setMovieTitle('')}>
                <div className='w-full relative'>
                    <LazyLoadImage effect='blur' alt={movie.title} src={movie.thumbnail} width='100%' />
                    <div className={`absolute bg-black h-full w-full inset-0 flex flex-col justify-center items-center space-y-8 text-white text-xl z-10 transition-all duration-500 ease-in-out 
                                    ${movieTitle === movie.title ? 'bg-opacity-80 opacity-100' : 'bg-opacity-0 opacity-0'} `}
                    >
                        <div className='flex items-center'>
                            <i className="fa-solid fa-star text-[#FFB802] mr-3"></i>
                            <span className='font-bold text-2xl'>{movie.rating}</span>
                        </div>
                        <span>{movie.category[0]}</span>
                        <button className='bg-rose-500 rounded-full py-1.5 px-8 text-base hover-opacity' onClick={onViewMovie}>VIEW</button>
                    </div>
                </div>
                <h3 className='text-sm md:text-base truncate'>{movie.title}</h3>
                <p className='text-sm md:text-base font-medium text-movie-2'>{movie.release}</p>
                <span className='absolute top-0 right-0 bg-movie-3 text-movie-1 p-2 rounded-bl opacity-80'>{movie.rating}</span>
            </div>
        </>
    );
}

export default MovieCard;