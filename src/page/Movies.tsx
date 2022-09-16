import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../component/MovieCard';
import DropdownSortBy from '../component/DropdownSortBy';
import { CATEGORY_LIST, FILM_LIST } from '../dummyData';
import Header from '../component/Header';

type Props = {};

const Movies: React.FC<Props> = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [movieList, setMovieList] = useState(FILM_LIST.slice(0, 12))
    const [sortBy, setSortBy] = useState({ value: 'Popularity', type: 'up' })

    const navigate = useNavigate()

    const handleChangeSortBy = (value: string, type: string) => {
        setSortBy({ value, type })
        setDropdownOpen(false)

        if(type === 'up'){
            if(value === 'Release'){
                setMovieList([...movieList].sort((a,b) => Number(a.release) - Number(b.release)))
            }else if(value === 'Rating'){
                setMovieList([...movieList].sort((a,b) => Number(a.rating) - Number(b.rating)))
            }else {
                setMovieList(FILM_LIST.slice(0, 12))
            }
        }else{
            if(value === 'Release'){
                setMovieList([...movieList].sort((a,b) => Number(b.release) - Number(a.release)))
            }else if(value === 'Rating'){
                setMovieList([...movieList].sort((a,b) => Number(b.rating) - Number(a.rating)))
            }else {
                setMovieList([...movieList].reverse())
            }
        }
    }

    return (
        <>
            <div className='bg-movie-3'>
                <Header />

                <div className='max-w-desk w-full mx-auto mt-6 md:mt-16 px-5 2xl:px-0 text-movie-1'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col font-semibold text-2xl'>
                            <span className='bg-rose-500 h-1.5 w-32 rounded-full mb-2'></span>
                            <h2>Discover Movies</h2>
                        </div>
                        <button className="md:hidden border border-movie-2 w-8 h-8 flex justify-center items-center rounded-lg ease-in-out duration-500" onClick={() => setMobileMenu(!mobileMenu)}>
                            {mobileMenu ? <i className='fa-solid fa-xmark text-lg'></i> : <i className='fa-solid fa-bars text-base'></i>}
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    <div className={`fixed md:hidden top-0 bg-movie-5 w-full h-full p-5 z-20 text-sm transform transition-all duration-700 ease-in-out ${mobileMenu ? '-translate-x-5' : 'translate-x-96'}`}>
                        <div className='w-full bg-movie-5 rounded-xl p-5 space-y-5'>
                            <div className='flex items-center justify-between'>
                                <h3 className='font-semibold text-xl'>Sort Result By</h3>
                                <button className="border border-movie-2 w-8 h-8 flex justify-center items-center rounded-lg ease-in-out duration-500" onClick={() => setMobileMenu(false)}>
                                    <i className='fa-solid fa-xmark text-lg'></i>
                                </button>
                            </div>
                            <div className='bg-movie-3 h-[0.5px] w-full'></div>
                            <div className='bg-movie-3 rounded-lg py-2 px-4 cursor-pointer relative' onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <div className='flex items-center justify-between'>
                                    <span>{sortBy.value}</span>
                                    {sortBy.type === 'up' ?
                                        <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>
                                    }
                                </div>
                                <DropdownSortBy onClick={handleChangeSortBy} dropdownOpen={dropdownOpen} />
                            </div>
                            <div className='bg-movie-3 h-[0.5px] w-full'></div>
                            <h3 className='font-semibold text-xl'>Genres</h3>
                            <div className='bg-movie-3 h-[0.5px] w-full'></div>
                            <div className='flex flex-col space-y-3'>
                                {CATEGORY_LIST.map((item, key) =>
                                    <div className='flex item-center justify-between hover:text-white' key={key}>
                                        <label htmlFor={item} className='cursor-pointer'>{item}</label>
                                        <input id={item} type='checkbox' className='cursor-pointer' />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row mt-10 mb-32'>
                        <div className='hidden md:block w-[21rem] h-max bg-movie-5 rounded-xl p-5 space-y-5 mr-5'>
                            <h3 className='font-semibold text-xl'>Sort Result By</h3>
                            <div className='bg-movie-3 h-[0.5px] w-full'></div>
                            <div className='bg-movie-3 rounded-lg py-2 px-4 cursor-pointer relative' onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <div className='flex items-center justify-between'>
                                    <span>{sortBy.value}</span>
                                    {sortBy.type === 'up' ?
                                        <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>
                                    }
                                </div>
                                <DropdownSortBy onClick={handleChangeSortBy} dropdownOpen={dropdownOpen} />
                            </div>
                            <div className='bg-movie-3 h-[0.5px] w-full'></div>
                            <h3 className='font-semibold text-xl'>Genres</h3>
                            <div className='bg-movie-3 h-[0.5px] w-full'></div>
                            <div className='flex flex-col space-y-3'>
                                {CATEGORY_LIST.map((item, key) =>
                                    <div className='flex item-center justify-between hover:text-white' key={key}>
                                        <label htmlFor={item + '1'} className='cursor-pointer'>{item}</label>
                                        <input id={item + '1'} type='checkbox' className='cursor-pointer' />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full relative'>
                            {movieList.map((item, key) =>
                                <MovieCard key={key} movie={item} onViewMovie={() => navigate('/movies/' + item.title.toLowerCase().replaceAll(' ', '-').replaceAll('%', '_'))} />
                            )}

                            
                            <div className='flex absolute -bottom-20 left-[27%] md:left-[42%]'>
                                <button className='bg-rose-500 font-medium px-10 py-2 rounded-full hover-opacity'>Load More</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Movies;