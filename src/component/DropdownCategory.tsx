import { Transition } from '@headlessui/react';
import React from 'react';
import { CATEGORY_LIST } from '../dummyData';

type Props = {
    dropdownOpen: boolean
};

const DropdownCategory: React.FC<Props> = ({ dropdownOpen }) => {
    return (
        <Transition show={dropdownOpen}
            enter="transition ease-out duration-500"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            className="origin-top-right z-10 absolute top-full mt-1 text-movie-5 bg-white rounded-xl w-48 px-4 py-2"
        >
            <div >
                <ul className='flex flex-col items-center font-semibold'>
                    {CATEGORY_LIST.map((item, key) => 
                        <li key={key} className='cursor-pointer hover:text-rose-500 transition-all ease-in-out duration-300 py-2 border-stone-800 w-full text-left'>{item}</li>
                    )}
                </ul>
            </div>
        </Transition>
    );
}

export default DropdownCategory;