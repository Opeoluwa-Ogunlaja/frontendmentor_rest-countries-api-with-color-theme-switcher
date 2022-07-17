import { useEffect, useLayoutEffect, useState } from "react";
import BackBtn from "../../components/Backbtn/backbtn";
import { useParams } from 'react-router-dom';
import { apiSiteName, ciocRequest } from "../../data";
import CountryInfo from "../../components/CountryInfo/countryinfo";
import { fetchCioc, fetchCountry } from "../../utils/apiCalls";
import Loading from "../../components/Loading/loading";

const Country = () => {
    const [country, setCountry] = useState({});
    let { countryname } = useParams();
    const [loading, setLoading] = useState(true);
    const noBorderMsg = "Has no countries around its' border";
    const [borders, setBorders] = useState([]);

    useLayoutEffect(() => {
        setLoading(true);
    }, [countryname]);

    useEffect(() => {
        setLoading(true);
        const setBorderCountries = (data) => {
            if (data.borders === undefined || data.borders === null) {
                setBorders(noBorderMsg);
                setLoading(false)
                return;
            }
            const borderStr = data.borders.join(',');
            // const borderStr = '';
            fetchCioc(`${ciocRequest}${borderStr}`)
            .then(data => {
                setBorders(data);
                setLoading(false); 
            })
            .catch(e => {console.error(e);setLoading(true)});
        };

        fetchCountry(`${apiSiteName}${countryname}`).then(data => {
            setCountry(data);
            setBorderCountries(data);
        });
    }, [countryname]);

    return (
        <div className={`flex-initial w-full ${loading ? 'h-screen' : ''} min-h-screen pt-20 space-y-4 md:space-y-10 sm:px-20 px-2`}>
            <div className="md:mt-10 sm:space-y-12">
                <BackBtn />
                {
                    loading === false && country !== []? <CountryInfo country={country} borders={borders}/> : <Loading />
                }
            </div>
        </div>
    )
}

export default Country;