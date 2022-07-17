import { Link } from "react-router-dom";
import  { MoonIcon, SunIcon } from '@heroicons/react/outline';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <header className="flex justify-between md:px-20 px-5 py-4 fixed w-full top-0 z-50 items-center dark:bg-blue-dark drop-shadow-md dark:text-white bg-white">
            <Link to="/" className="text-base font-bold sm:text-lg">Where in the world?</Link>
            <button onClick={toggleTheme} className="flex text-sm md:text-xs justify-center place-items-center w-max space-x-1">
                {theme ===  "light" ? <MoonIcon className="w-5 aspect-square"/> : <SunIcon className="w-5 aspect-square"/>}
                <span className="w-max text-sm sm:text-base font-nm">{theme ===  "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>            
        </header>
    )
}

export default Navbar;