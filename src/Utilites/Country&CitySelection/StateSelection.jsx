import { ClipLoader } from "react-spinners";
import { useGetCountryStateQuery } from "../../Redux/Features/state/stateApi";
import { useEffect, useState } from "react";

const StateSelection = ({ countryId, onStateChange }) => {
    // --- disabling state option menu if user doesn't select any country
    const [option, setOption] = useState(true);

    useEffect(() => {
        if (countryId == 0) {
            setOption(true);
            onStateChange(0)
        }else{
            setOption(false);
        }
    }, [countryId])

    // --- get all 'country state' list from mongodb with redux according to the country
    const { data, isLoading, isError, error, isSuccess } = useGetCountryStateQuery(countryId);

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
        content = <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-5">
            <label htmlFor="city" className="font-semibold text-slate-800  text-center">Select a State :</label>
            <select
                id="city"
                disabled={option}
                onChange={(e) => onStateChange(e.target.value)}
                className="block w-full p-2 bg-white border border-gray-300 rounded shadow"
            >
                <option value="0">Select State</option>
                {data.map((state) => (
                    <option key={state._id} value={state.state_id}>
                        {state.state_name}
                    </option>
                ))}
            </select>
        </div>
    }
    return (content);
};

export default StateSelection;