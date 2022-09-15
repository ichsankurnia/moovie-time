import React from 'react';
import logoFooter from './../assets/logo-gray.png'

type Props = {};

const Footer: React.FC<Props> = () => {
    return (
        <footer className='bg-movie-5 mt-auto py-10 px-2 md:px-5 2xl:px-0'>
          <div className='max-w-desk w-full mx-auto flex justify-between items-center text-movie-2 font-medium text-[10px] md:text-base'>
            <span>© {new Date().getFullYear()} MoovieTime. All rights reserved.</span>
            <img src={logoFooter} alt='logo-footer' className='w-14 md:w-28' />
            <span>Made with React.js</span>
          </div>
        </footer>
    );
}

export default Footer;