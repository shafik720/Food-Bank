import { useEffect, useState } from "react";
import CountrySelection from "../../../Utilites/Country&CitySelection/CountrySelection";
import CitySelection from "../../../Utilites/Country&CitySelection/CitySelection";
import StateSelection from "../../../Utilites/Country&CitySelection/StateSelection";


const AddFoodReview = () => {
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedState, setSelectedState] = useState(0)


    return (
        <div className="container add-food-review w-full">
            <h2 className="text-2xl text-center font-bold pb-4 text-pink-700">Add a Food review</h2>
            <hr className="horizontal-for-profile-section" />

            <div className="mx-auto lg:max-w-2xl p-4">
                <CountrySelection onCountryChange={setSelectedCountry} />
                <StateSelection countryId={selectedCountry} onStateChange={setSelectedState} />
                <CitySelection stateId={selectedState} />
                <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                    <p className="font-semibold text-slate-800 text-center">Restaurant Name : </p>
                    <span>
                        <input type="text" placeholder="Type here" className="input input-success w-full max-w-xs " />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AddFoodReview;