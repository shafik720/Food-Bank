import { ClipLoader } from "react-spinners";
import { useGetCountryStateQuery } from "../../Redux/Features/state/stateApi";

const StateSelection = ({countryId}) => {
    // --- get all 'country state' list from mongodb with redux according to the country
    const { data, isLoading, isError, error, isSuccess } = useGetCountryStateQuery(countryId || 18);

    // --- deciding what to render while fetching data from server with redux
    let content = null;

    // --- when fetching-data process is in loading state
    if (isLoading && !isError) {
        content = <div className=""><ClipLoader color="black" size={35} /></div>
    }

    // --- when there is a error happened while fetching-data 
    if (!isLoading && isError) {
        console.log(error);
        content = <div className=" text-red-600 font-bold">
            {error.error}
        </div>;
    }

    if (!isLoading && !isError && isSuccess) {
        console.log(data);
        content = <div className="mt-10">
        <label htmlFor="city" className="font-semibold text-blue-700">Select a State:</label>
        <select
            id="city"
            className="block w-full p-2 bg-white border border-gray-300 rounded shadow mt-3"
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