import { useEffect, useState } from "react";
import { useGetCityListQuery } from "../../Redux/Features/city/cityApi";
import { ClipLoader } from "react-spinners";

const CitySelection = ({ stateId }) => {
    // --- disabling state option menu if user doesn't select any country
    const [option, setOption] = useState(true);

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
        // console.log(data);
        content = <div className="mt-10">
            <label htmlFor="city" className="font-semibold text-blue-700">Select a City:</label>
            <select
                id="city"
                disabled={option}
                className="block w-full p-2 bg-white border border-gray-300 rounded shadow mt-3"
            >
                <option value="0">Select City</option>
                {data.map((city) => (
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