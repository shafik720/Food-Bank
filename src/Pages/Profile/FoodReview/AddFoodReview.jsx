import { useEffect, useState } from "react";
import CountrySelection from "../../../Utilites/Country&CitySelection/CountrySelection";
import CitySelection from "../../../Utilites/Country&CitySelection/CitySelection";
import StateSelection from "../../../Utilites/Country&CitySelection/StateSelection";


const AddFoodReview = () => {
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedState, setSelectedState] = useState(0)

    // function handleSubmit(e) {
    //     fetch('http://localhost:4000/add', {
    //         method : 'POST',
    //         headers : {
    //             'content-type' : 'application/json'
    //         },
    //         body : JSON.stringify({user : 'rasel'})
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
    return (
        <div className="add-food-review w-full">
            <h2 className="text-2xl text-center font-bold pb-4 text-pink-700">Add a Food review</h2>
            <hr className="horizontal-for-profile-section" />

            <div className="container mx-auto lg:w-60 p-4">
                <CountrySelection onCountryChange={setSelectedCountry} />
                <StateSelection countryId={selectedCountry} onStateChange={setSelectedState} />
                <CitySelection stateId={selectedState} />
                {/* <button className="btn mt-7 btn-primary" onClick={handleSubmit}>Submit</button> */}
                {/* <CitySelector selectedCountry={selectedCountry} /> */}
            </div>
        </div>
    );
};

export default AddFoodReview;