import { useEffect, useState } from "react";
import { useGetAllCountryQuery } from "../../Redux/Features/country/countryApi";
import { ClipLoader } from "react-spinners";

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

    if (!isLoading && !isError && data.length > 0) {
        content = <div>
            <label htmlFor="country" className="font-semibold text-blue-700">Select a Country:</label>
            <select
                id="country"
                onChange={(e) => onCountryChange(e.target.value)}
                className="block w-full p-2 my-3 bg-white border border-gray-300 rounded shadow"
            >
                <option value="0" >Select Country</option>
                {data.map((country) => (
                    <option key={country.country_id} value={country.country_id}>
                        {country.country_name}
                    </option>
                ))}
            </select>
        </div>

    }

    return (content);
};

export default CountrySelection;