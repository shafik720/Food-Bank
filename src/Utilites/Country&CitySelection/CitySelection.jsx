import { useEffect, useState } from "react";
import { useGetCityListQuery } from "../../Redux/Features/city/cityApi";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { selectCity } from "../../Redux/Features/city/citySlice";

const CitySelection = ({ stateId, onCityChange }) => {
    // --- disabling state option menu if user doesn't select any country
    const [option, setOption] = useState(true);

    // --- select city id to redux state
    const dispatch = useDispatch();

    const handleCityChange = (e) => {
        onCityChange(e) ; 
        dispatch(selectCity(e));
    }

    useEffect(() => {
        if (stateId == 0) {
            setOption(true);
        } else {
            setOption(false);
        }
    }, [stateId])

    // --- get all 'country state' list from mongodb with redux according to the country
    const { data, isLoading, isError, error, isSuccess } = useGetCityListQuery(stateId);

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


    if (!isLoading && !isError && isSuccess) {
        const sortedData = [...data].sort((a,b)=>a.city_name.localeCompare(b.city_name));

        content = <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-5 text-center">
            <label htmlFor="city" className="font-semibold text-slate-800 text-center">Select a City :</label>
            <select
                id="city"
                disabled={option}
                onChange={e => handleCityChange(e.target.value)}
                className="block w-full p-2 bg-white border border-gray-300 rounded shadow mt-3"
            >
                <option value="0">Select City</option>
                {sortedData.map((city) => (
                    <option key={city._id} value={city.city_id}>
                        {city.city_name}
                    </option>
                ))}
            </select>
        </div>
    }
    return (content);
};

export default CitySelection;