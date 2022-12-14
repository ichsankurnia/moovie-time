import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'

interface ICombobox {
    listData: any[],
    displayValue: any,
    name: string,
    label?: string,
    selected?: any,
    setSelected?: { (data: any): any },
    className?: string,
    placeholder?: string,
    required?: boolean,
    disabled?: any,
    zIndex?: string,
}

export const Select = ({ listData, displayValue, name, label, selected, setSelected, className, placeholder, required, disabled, zIndex }: ICombobox) => {
    const [query, setQuery] = useState('')

    const filteredData =
        query === ''
            ? listData
            : listData.filter((data: any) =>
                data?.[name]
                    ?.toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query?.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <Combobox value={selected} onChange={(data: any) => setSelected ? setSelected(data) : undefined} name={name}>
            {label && <Combobox.Label>{label}</Combobox.Label>}
            <div className={`text-sm md:text-base relative ${zIndex || 'z-10'}`}>
                <div className="relative w-full cursor-default overflow-hidden text-left rounded-lg">
                    <Combobox.Button as="div" >
                        <Combobox.Input
                            placeholder={placeholder || '- Select field -'} autoComplete='off' required={required}
                            className={`capitalize w-full rounded-lg py-2.5 pl-14 pr-10 border-none outline-rose-500 bg-movie-4 transition ease-in-out duration-700 ${className}`}
                            displayValue={displayValue}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <i className="fa-solid fa-clapperboard absolute top-3.5 left-5 text-gray-400"></i>
                        {selected && <i className="fa-solid fa-xmark text-base absolute top-2.5 right-14 cursor-pointer hover:text-rose-500 ease-in-out duration-300" onClick={() => { setQuery(''); setSelected && setSelected(null) }}></i>}
                        <i className="fa-solid fa-magnifying-glass absolute top-3.5 right-5"></i>
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lgone bg-black py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                        {filteredData?.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-movie-1">
                                Nothing found.
                            </div>
                        ) : (
                            filteredData?.map((data: any, key: number) => (
                                <Combobox.Option
                                    key={key}
                                    className={({ active }) => `relative cursor-pointer select-none py-2 pl-9 px-4 ${active ? 'bg-rose-500 text-white' : 'text-movie-1'}`}
                                    value={data} disabled={data[disabled]}
                                >
                                    {({ selected, active, disabled }) => (
                                        <>
                                            <span className={`block truncate capitalize ${selected ? 'font-semibold' : 'font-normal'} ${disabled && 'text-gray-400'}`} >
                                                {displayValue(data)}
                                            </span>
                                            {selected ?
                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-rose-500'}`} >
                                                    <i className="fa-solid fa-check"></i>
                                                </span>
                                                : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    )
}