import { Transition } from '@headlessui/react';
import React from 'react';
import { DROPDOWNS_SORT_LIST } from '../dummyData';

type Props = {
    dropdownOpen: boolean,
    onClick: (value: string, type: string) => any
};

const DropdownSortBy: React.FC<Props> = ({ dropdownOpen, onClick }) => {
    return (
        <Transition show={dropdownOpen}
            enter="transition ease-out duration-500"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            className="origin-top-right z-20 absolute top-full -left-0 mt-1 text-movie-1 bg-black rounded-xl w-full py-2"
        >
            <div >
                <ul className='flex flex-col items-center font-medium text-sm'>
                    {DROPDOWNS_SORT_LIST.map((item, key) => 
                        <li key={key} className='cursor-pointer hover:bg-rose-500 transition-all ease-in-out duration-300 px-4 py-2 border-stone-800 w-full text-left' onClick={() => onClick(item.value, item.type)}>{item.label}</li>
                    )}
                </ul>
            </div>
        </Transition>
    );
}

export default DropdownSortBy;