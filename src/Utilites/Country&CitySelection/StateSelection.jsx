
const StateSelection = () => {
    return (
        <div className="mt-10">
            <label htmlFor="city" className="font-semibold text-blue-700">Select a State:</label>
            <select
                id="city"
                className="block w-full p-2 bg-white border border-gray-300 rounded shadow mt-3"
            >
                <option value="0">Select State</option>
                <option></option>
            </select>
        </div>
    );
};

export default StateSelection;