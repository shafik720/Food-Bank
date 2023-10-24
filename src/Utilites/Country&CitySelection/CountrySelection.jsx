import { useEffect, useState } from "react";
import { useGetAllCountryQuery } from "../../Redux/Features/country/countryApi";
import { ClipLoader } from "react-spinners";
import Select from 'react-select';


const CountrySelection = ({ onCountryChange }) => {

    // --- get all country list from mongodb with redux
    const { data, isLoading, isError, error, isSuccess } = useGetAllCountryQuery();

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

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
        // .then(data2=>console.log(data2))
    }, [])

    if (!isLoading && !isError && data?.length > 0) {
        console.log(data);

        content = <div>
            <label htmlFor="country" className="font-semibold text-blue-700">Select a Country:</label>
            <Select
                options={data.map((country) => ({
                    value: country.country_id,
                    label: (
                        <div className="flex gap-2 justify-start items-center">
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