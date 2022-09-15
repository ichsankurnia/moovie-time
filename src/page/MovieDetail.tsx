import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import cover from '../assets/cover-img.png'
import Header from '../component/Header';
import { FILM_LIST, REVIEW_LIST } from '../dummyData';
import MovieCard from '../component/MovieCard';
import { useNavigate, useParams } from 'react-router-dom';

type Props = {};

const MovieDetail: React.FC<Props> = () => {
    const [data, setData] = useState<any>(null)
    const navigate = useNavigate()

    const {slug} = useParams()

    useEffect(() => {
        if(slug){
            const title = slug?.replaceAll('-', ' ').replaceAll('_', '%')
    
            setData(FILM_LIST.find(item => item.title.toLowerCase() === title))
        }
    }, [slug])

    return (
        <>
            <div className='flex flex-col relative'>
                <Header />
                <div className='bg-movie-3 absolute top-0 w-full'>
                    <LazyLoadImage effect='blur' alt='cover-img' src={cover} width='100%' className='h-[30rem] 2xl:h-[40rem] object-cover object-top' />
                    <div className='bg-black h-20 w-full z-[4] absolute bottom-0 opacity-50 over-hidden'></div>
                </div>
            </div>
            <div className='max-w-desk w-full mx-auto flex items-end z-[5] mt-40 md:mt-52 2xl:mt-96 p-5 2xl:p-0'>
                <LazyLoadImage effect='blur' alt='' src={data?.thumbnail} className='hidden md:block' />
                <div className='flex flex-col items-center md:items-start text-movie-1 md:ml-8 py-2 font-medium w-full md:w-max'>
                    <span>{data?.release}</span>
                    <h1 className='font-semibold text-3xl md:text-4xl my-1.5'>{data?.title}</h1>
                    <span>{data?.category.join(', ')}</span>
                    <div className='flex items-center space-x-8 mt-7 md:mt-8 text-xs md:text-sm overflow-x-scroll md:overflow-x-hidden overflow-y-hidden w-full'>
                        <div className='flex items-center'>
                            <i className="fa-solid fa-star text-[#FFB802] text-3xl mr-3"></i>
                            <span className='font-bold text-4xl'>{data?.rating}</span>
                        </div>
                        <div>
                            <h3 className='text-movie-2'>USER SCORE</h3>
                            <span>3621 VOTES</span>
                        </div>
                        <div className='h-10 w-[0.5px] bg-movie-2'></div>
                        <div>
                            <h3 className='text-movie-2'>STATUS</h3>
                            <span>RELEASED</span>
                        </div>
                        <div className='h-10 w-[0.5px] bg-movie-2'></div>
                        <div>
                            <h3 className='text-movie-2'>LANGUAGE</h3>
                            <span>ENGLISH</span>
                        </div>
                        <div className='h-10 w-[0.5px] bg-movie-2'></div>
                        <div>
                            <h3 className='text-movie-2'>BUDGET</h3>
                            <span>$200,000,000.00</span>
                        </div>
                        <div className='h-10 w-[0.5px] bg-movie-2'></div>
                        <div>
                            <h3 className='text-movie-2'>PRODUCTION</h3>
                            <span>DC Entertainment</span>
                        </div>
                    </div>
                    <div className='text-black mt-9'>
                        <h2 className='text-rose-500 font-semibold mb-3'>Overview</h2>
                        <p className='md:w-3/5'>Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.</p>
                    </div>
                </div>
            </div>
            <div className='max-w-desk w-full mx-auto mt-5 mb-14 px-5 2xl:p-0'>
                <div className='flex flex-col'>
                    <h2 className='text-rose-500 font-semibold mb-5'>Review</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
                        {REVIEW_LIST.map((item, key) =>
                            <div className='bg-[#f9f9f9] rounded-xl shadow-lg p-6' key={key}>
                                <div className='flex items-center justify-between'>
                                    <div className='flex item-center'>
                                        <div className='w-12 h-12 bg-[#ddd] rounded-full'></div>
                                        <div className='flex flex-col ml-3'>
                                            <h4 className='font-semibold'>{item.name}</h4>
                                            <p className='text-xs'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start bg-[#ddd] rounded-lg py-1 px-2'>
                                        <i className="fa-solid fa-star text-[#FFB802] text-xs mr-1"></i>
                                        <span className='text-2xl font-semibold'>{item.rating}</span>
                                    </div>
                                </div>
                                <p className='italic text-sm mt-6 font-medium'>{item.review}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='bg-movie-4'>
                <div className='max-w-desk w-full mx-auto my-14 px-5 2xl:p-0'>
                    <h2 className='font-semibold text-white'>RECOMMENDATION MOVIES</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10'>
                        {FILM_LIST.slice(FILM_LIST.length - 5, FILM_LIST.length).map((item, key) =>
                            <MovieCard key={key} movie={item} onViewMovie={() => navigate('/movies/' + item.title.toLowerCase().replaceAll(' ', '-').replaceAll('%', '_'))} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;