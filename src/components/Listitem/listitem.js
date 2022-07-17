import { Link } from "react-router-dom";
import { splitNumber } from "../../utils/utils";

const ListItem = ({name, population, region, capital, flags}) => {
    name = name.common;
    flags = flags.png;
    return (
        <Link to={`/country/${name}`}>
        <div className="flex flex-col h-max overflow-hidden rounded-lg shadow-md">
            <img src={flags} alt={`${name} flag`} className="w-full h-36 drop-shadow" loading="lazy"></img>
            <div className="py-6 px-4 space-y-2 md:text-homepage w-full bg-white dark:bg-blue-dark">
                <h3 className="font-bold text-lg dark:text-white">{name}</h3>
                <ul>
                    <li className="dark:text-white"><label className="font-nm">Population:</label> <span className="font-lt">{splitNumber(population)}</span></li>
                    <li className="dark:text-white"><label className="font-nm">Region:</label> <span className="font-lt">{region}</span></li>
                    <li className="dark:text-white"><label className="font-nm">Capital:</label> <span className="font-lt">{capital}</span></li>
                </ul>
            </div>
        </div>
        </Link>
    )
}

export default ListItem;