import { SearchIcon } from "@heroicons/react/solid";

const SearchBar = ({ search ,setSearch }) => {
    const handleChange = (e) => {
        if (e.target.value !== ' ') {
            setSearch(e.target.value);   
        }
    }

    return (
        <div className="w-full sm:w-1/3 relative sm:mb-5 isolate p-0 drop-shadow-md shadow">
            <input type={'text'} className="py-3 font-lt px-10 placeholder:text-homepage dark:text-white dark:bg-blue-dark outline-none focus:border-bgcolor-light w-full text-xl dark:placeholder:text-white rounded-md" onChange={handleChange} value={search} placeholder="Search for a country..."/>
            <SearchIcon className="aspect-square absolute dark:text-white w-4 inset-y-1 z-auto top-0 m-4 mb-2" />
        </div>
    )
}

export default SearchBar;