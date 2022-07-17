import { useState } from "react";
import Dropdown from "react-dropdown";
import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/solid'

const ContinentFilter = ({ setFilter }) => {
    const [value] = useState({
        label: 'Filter by region',
        value: ''
    });
    const regions = [
        {
            label: 'Filter by region',
            value: ''
        },
        {
            label: 'Africa',
            value: 'Africa'
        },
        {
            label: 'Americas',
            value: 'Americas'
        },
        {
            label: 'Asia',
            value: 'Asia'
        },
        {
            label: 'Europe',
            value: 'Europe'
        },
        {
            label: 'Oceania',
            value: 'Oceania'
        }
    ];

    const handleChange = (e) => {
        setFilter(e.value)
    }

    return (
        <div className="">
            {/* <select className="w-3/5 sm:w-max shadow-md px-1 py-3 max-h-[3.25rem] rounded-sm outline-none dark:bg-blue-dark dark:text-white" onChange={handleChange}>
                {regions.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)}
            </select> */}
            <Dropdown 
                onChange={handleChange} 
                className={'dark:bg-blue-dark py-3.5 w-3/5 sm:min-w-[12rem] rounded-md px-6 shadow-md bg-white'}
                placeholderClassName='dark:text-white font-lt text-homepage'
                value={value}
                menuClassName='absolute mt-5 px-6 cursor-pointer space-y-4 min-w-[55%] bg-white shadow-lg drop-shadow-md sm:min-w-[12rem] -translate-x-6 py-2 dark:bg-blue-dark z-50 rounded-md dark:text-white'
                options={regions} 
                controlClassName='flex justify-between items-center'
                arrowClosed={<ChevronDownIcon className="w-6 aspect-square dark:text-white"/>}
                arrowOpen={<ChevronUpIcon className="w-6 aspect-square dark:text-white"/>}
            />
        </div>
    )
}

export default ContinentFilter;