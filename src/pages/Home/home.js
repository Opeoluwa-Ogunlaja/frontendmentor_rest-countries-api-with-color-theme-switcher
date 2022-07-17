import { useEffect, useState } from "react";
import ContinentFilter from "../../components/Continentfilter/continentfilter";
import CountryList from "../../components/Countrylist/countrylist";
import SearchBar from "../../components/Searchbar/searchbar";
import { apiSiteAll } from "../../data";
import { fetchCountries } from "../../utils/apiCalls";
import Loading from "../../components/Loading/loading";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchCountries, setSearchCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchCountries(apiSiteAll).then(data => {
            setCountries(data);
            setSearchCountries(data);
            setFilteredCountries(data);
        })
        .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        setSearchCountries(state => {
            if (search.length > 0) {
                return countries.filter((item,i) => item.name.common.toLowerCase().indexOf(search.toLowerCase()) >= 0);
            }
            return countries;
        }
        );
    }, [search]);

    useEffect(() => {
        const filterCountries = (filter) => {
            if (filter.length === 0) {
                setFilteredCountries(searchCountries);
                return;
            }

            setFilteredCountries(state => {
                return searchCountries.filter((item,i) => item.region === filter);
            })
        }

        filterCountries(filter);
        setLoading(false);
    }, [searchCountries, filter])

    return(
        <div className="min-h-screen">
            <div className="pt-20 sm:pt-24 mx-auto flex flex-col  sm:flex-row gap-6 mb-8 sm:gap-0 sm:justify-between w-11/12">
                <SearchBar search={search} setSearch={setSearch}/>
                <ContinentFilter setFilter={setFilter}/>
            </div>
            {
                loading === true || (filteredCountries.length === 0 && search === '' && filter === '')? <Loading /> : <CountryList countries={filteredCountries}/>
                // loading === true? <p>Loading...</p> : <CountryList countries={filteredCountries}/>
            }
        </div>
    )
}

export default Home;