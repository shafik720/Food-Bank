import { useEffect, useState } from "react";

const CountrySelection = ({ onCountryChange }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/getCountry")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data[0].data);
                // data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                let sortedCountry = data[0].data.sort((a, b) => a.country_name.localeCompare(b.country_name));
                setCountries(sortedCountry);
            });
    }, []);
    // console.log(countries);
    return (
        <div>
            <label htmlFor="country" className="font-semibold text-blue-700">Select a Country:</label>
            <select
                id="country"
                onChange={(e) => onCountryChange(e.target.value)}
                className="block w-full p-2 my-3 bg-white border border-gray-300 rounded shadow"
            >
                <option value="0" >Select Country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.country_name}>
                        {country.country_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelection;