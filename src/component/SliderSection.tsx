import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from 'react-slick';
import { SLIDER_FILM_LIST } from '../dummyData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const SliderSection: React.FC<Props> = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        dotsClass: "button__bar",
        responsive: [
            {
                breakpoint: 1368,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {SLIDER_FILM_LIST.map((item, key) =>
                    <div key={key}>
                        <div className='flex flex-row items-center sm:text-sm'>
                            <LazyLoadImage effect='blur' className='h-[23rem]' alt={item.title} src={item.thumbnail} />
                            <div className='bg-black text-white flex flex-col space-y-3 md:space-y-4 h-[20rem] w-[15rem] md:w-[24rem] p-5 rounded-r text-xs md:text-base'>
                                <div className='flex items-center'>
                                    <i className="fa-solid fa-star text-[#FFB802] mr-2"></i>
                                    <span className='font-bold text-lg'>{item.rating}</span>
                                </div>
                                <h2 className='text-base md:text-3xl font-semibold'>{item.title}</h2>
                                <div className='flex items-center space-x-3 md:text-lg'>
                                    <p>{item.release}</p>
                                    <span className='bg-movie-2 rounded-full w-3 h-3'></span>
                                    <p>{item.category}</p>
                                </div>
                                <p className='md:text-sm'>{item.overview}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </>
    );
}

export default SliderSection;