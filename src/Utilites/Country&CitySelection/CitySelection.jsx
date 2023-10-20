import { useEffect, useState } from "react";

const CitySelection = () => {
    const options = { method: 'GET' };
    const [city, setCity] = useState('');

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            // .then(response => console.log(response))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className="mt-10">
            <label htmlFor="city" className="font-semibold text-blue-700">Select a City:</label>
            <select
                id="city"
                className="block w-full p-2 bg-white border border-gray-300 rounded shadow mt-3"
            >
                <option value="0">Select City</option>
                <option></option>
            </select>
        </div>
    );
};

export default CitySelection;