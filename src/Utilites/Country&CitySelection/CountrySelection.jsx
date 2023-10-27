import { useEffect, useState } from "react";
import { useGetAllCountryQuery } from "../../Redux/Features/country/countryApi";
import { ClipLoader } from "react-spinners";
import Select from 'react-select';

import './Country.css';


const CountrySelection = ({ onCountryChange }) => {

    // --- get all country list from mongodb with redux
    const { data, isLoading, isError, error, isSuccess } = useGetAllCountryQuery();

    const [countries, setCountries] = useState([]);

    // --- deciding what to render while fetching data from server with redux
    let content = null;

    // --- when fetching-data process is in loading state
    if (isLoading && !isError) {
        content = <div className="my-8"><ClipLoader color="black" size={35} /></div>
    }

    // --- when there is a error happened while fetching-data 
    if (!isLoading && isError) {
        console.log(error);
        content = <div className=" text-red-600 font-bold">
            {error.error}
        </div>;
    }


    if (!isLoading && !isError && data?.length > 0) {
        const sortedData = [...data].sort((a,b)=>a.country_name.localeCompare(b.country_name));
        content = <div className="country-selection-div lg:grid lg:grid-cols-2">
            <label htmlFor="country" className="font-semibold text-slate-800  text-center">Select Country :</label>
            <Select
                className=" "
                options={sortedData.sort((a,b)=>a.country_name.localeCompare(b.country_name)).map((country) => ({
                    value: country.country_id,
                    label: (
                        <div className="flex gap-2 justify-start items-center font-semibold">
                            <img className="w-5" src={`https://flagcdn.com/w320/${country.sortname.toLowerCase()}.png`} alt="" />
                            {country.country_name}
                        </div>
                    ),
                }))}
                onChange={(selectedOption) => onCountryChange(selectedOption.value)}
            />
        </div>

    }

    return (content);
};

export default CountrySelection;