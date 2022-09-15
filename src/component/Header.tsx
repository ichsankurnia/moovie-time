import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DUMMY_SEARCH_LIST } from '../dummyData';
import logo from './../assets/MoovieTime-Logo@2x.png'
import categoryLogo from './../assets/category-logo.png'
import DropdownCategory from './DropdownCategory';
import { Select } from './Select';

type Props = {};

const Header: React.FC<Props> = () => {
    const [selected, setSelected] = useState(null)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <>
            <header className='hidden md:flex max-w-desk w-full mx-auto justify-between items-center text-movie-1 font-medium py-2 px-5 2xl:px-0 bg-transparent z-10'>
                <img src={logo} alt='logo' className='w-36 cursor-pointer hover-opacity' onClick={() => window.location.href = '/'} />
                <Select placeholder='Find movie' name='title' className='font-medium w-[40rem]' zIndex='z-10'
                    listData={DUMMY_SEARCH_LIST} disabled='unavailable'
                    selected={selected} setSelected={setSelected}
                    displayValue={(data: any) => data ? data?.title : ''}
                />
                <div className='nav-title relative' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <div className='flex items-center'>
                        <img src={categoryLogo} alt='cate-logo' className='w-7 mr-3' />
                        <span className='uppercase'>Category</span>
                    </div>
                    <DropdownCategory dropdownOpen={dropdownOpen} />
                </div>
                <NavLink to='/movies' className={({ isActive }) => `nav-title ${isActive && 'text-rose-500'}`}>Movies</NavLink>
                <NavLink to='/tv' className={({ isActive }) => `nav-title ${isActive && 'text-rose-500'}`}>TV Shows</NavLink>
                <NavLink to='/auth' className={({ isActive }) => `nav-title ${isActive && 'text-rose-500'}`}>Login</NavLink>
            </header>

            {/* HEDAER MOBILE */}
            <header className='md:hidden flex flex-col w-full  text-movie-1 font-medium py-3 px-5 2xl:px-0 z-20'>
                {showSearch ?
                    <div className='flex items-center justify-between'>
                        <Select placeholder='Find movie' name='title' className='font-medium text-sm w-72' zIndex='z-10'
                            listData={DUMMY_SEARCH_LIST} disabled='unavailable'
                            selected={selected} setSelected={setSelected}
                            displayValue={(data: any) => data ? data?.title : ''}
                        />
                        <i className="fa-solid fa-xmark text-lg w-8 h-8 flex justify-center items-center border rounded-lg border-movie-3" onClick={() => setShowSearch(false)}></i>
                    </div>
                    :
                    <div className='flex items-center justify-between'>
                        <img src={logo} alt='logo' className='w-24 cursor-pointer hover-opacity' onClick={() => window.location.href = '/'} />
                        <i className="fa-solid fa-magnifying-glass w-8 h-8 flex justify-center items-center border rounded-lg border-movie-3" onClick={() => setShowSearch(true)}></i>
                    </div>
                }
                <div className='flex text-xs items-center justify-between mt-5 mb-2'>
                    <div className='nav-title relative' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                        <div className='flex items-center'>
                            <img src={categoryLogo} alt='cate-logo' className='w-5 mr-2' />
                            <span className='uppercase'>Category</span>
                        </div>
                        <DropdownCategory dropdownOpen={dropdownOpen} />
                    </div>
                    <NavLink to='/movies' className={({ isActive }) => `nav-title ${isActive && 'text-rose-500'}`}>Movies</NavLink>
                    <NavLink to='/tv' className={({ isActive }) => `nav-title ${isActive && 'text-rose-500'}`}>TV Shows</NavLink>
                    <NavLink to='/auth' className={({ isActive }) => `nav-title ${isActive && 'text-rose-500'}`}>Login</NavLink>
                </div>
            </header>
        </>
    );
}

export default Header;