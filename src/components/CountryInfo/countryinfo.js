import { splitNumber } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryInfo = ({ country, borders }) => {
    const navigate = useNavigate();

    const listCurrencies = () => {
        const currencies = Object.values(country.currencies);
        let templateArr = currencies.map(item => `${item.name}(${item.symbol})`);
        return templateArr.join(', ');
    }

    const listLanguages = () => {
        const languages = Object.values(country.languages);
        return languages.join(', ')
    }

    const borderCountries = () => {
        let templateArray = [];
        templateArray = borders.map((item, i) => {
            return <Link key={i} to={`/country/${item.name.common}`} className="dark:bg-blue-dark block text-center sm:text-start sm:px-4 sm:w-fit w-2/5 text-detail font-lt py-2 shadow-sm drop-shadow-md bg-white cursor-pointer rounded-sm" onClick={() => {navigate(`/country/${item.name.common}`); navigate(0)} }>{item.name.common}</Link>
        })
        return templateArray;
    }

    return (
        Object.keys(country).length > 0
        ?
        <div className="sm:h-6/12 w-full sm:w-auto min-w-40 flex flex-col gap-x-20 sm:justify-around rounded-sm sm:shadow-none lg:flex-row">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="sm:w-3/12 md:w-7/12 md:max-w-xl sm:min-w-[35%] w-full h-36 sm:h-auto max-h-80 border-2 border-neutral-50"></img>
            <div className="px-4 py-6 space-y-4 text-detail">
                <h3 className="font-bold text-xl sm:text-3xl dark:text-white">{country.name.common}</h3>
                <ul className="text-detail dark:text-white space-y-4 sm:space-y-0 sm:grid grid-cols-2 justify-start gap-x-10 items-start">
                    <div className="w-full sm:w-[35ch] space-y-2">
                        <li><label className="font-nm">Native name:</label> <span className="font-lt inline-table sm:w-[20ch]">{country.name.common}</span></li>
                        <li><label className="font-nm">Population:</label> <span className="font-lt inline-table sm:w-[20ch]">{splitNumber(country.population)}</span></li>
                        <li><label className="font-nm">Region:</label> <span className="font-lt inline-table sm:w-[20ch]">{country.region}</span></li>
                        <li><label className="font-nm">Sub-region:</label> <span className="font-lt inline-table sm:w-[20ch]">{country.subregion}</span></li>
                        <li><label className="font-nm">Capital:</label> <span className="font-lt inline-table sm:w-[20ch]">{country.capital}</span></li>
                    </div>
                    <div className="w-full sm:w-[35ch] space-y-2 text-detail">
                        <li><label className="font-nm">Top Level Domain:</label> <span className="font-lt inline-table sm:w-[20ch]">{country.tld.join(', ')}</span></li>
                        <li><label className="font-nm">Currencies:</label> <span className="font-lt inline-table sm:w-[20ch]">{listCurrencies()}</span></li>
                        <li><label className="font-nm">Languages:</label> <span className="font-lt inline-table sm:w-[20ch]">{listLanguages()}</span></li>
                    </div>
                </ul>
                <div className="dark:text-white sm:flex sm:gap-x-2">
                    <h3 className="font-bold mt-4 min-w-max">Border Countries:</h3>
                        {
                            typeof borders === "string"?
                                <p className="w-full text-center mt-4">{borders}</p>
                            : 
                                <div className="flex sm:inline-flex mt-4 w-full sm:w-4/5 flex-wrap justify-center sm:justify-start gap-x-1 gap-y-4">
                                    {borderCountries()}
                                </div>
                        }
                </div>
            </div>
        </div>
        :
        null
    );
}

export default CountryInfo;