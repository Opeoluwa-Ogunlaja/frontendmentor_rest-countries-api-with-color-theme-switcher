import ListItem from "../Listitem/listitem";

const CountryList = ({ countries }) => {
    return (
        <div className="grid justify-center pb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 sm:px-20 gap-4 sm:gap-6 md:gap-16 overflow-hidden">
            {
                countries.length === 0 ?
                    <div className="">
                        <p className="text-white">No results</p>
                    </div>
                :
                    countries.map((item,i) => {
                        return <ListItem key={i} {...item}/>
                    })
            }
        </div>
    )
}

export default CountryList;