import { useEffect, useState } from "react";

const CountrySelection = ({ onCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                setCountries(data);
            });
    }, []);
    console.log(countries);
    return (
        <div>
            <label htmlFor="country">Select a Country:</label>
            <select
                id="country"
                onChange={(e) => onCountryChange(e.target.value)}
                className="block w-full p-2 my-3 bg-white border border-gray-300 rounded shadow"
            >
                <option value="0" >Select Country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.name.common}>
                        {country.name.common}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelection;