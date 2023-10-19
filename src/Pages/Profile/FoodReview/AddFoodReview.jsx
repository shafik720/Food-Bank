import { useEffect, useState } from "react";
import CountrySelection from "../../../Utilites/Country&CitySelection/CountrySelection";


const AddFoodReview = () => {
    const [selectedCountry, setSelectedCountry] = useState("");

    return (
        <div className="add-food-review w-full">
            <h2 className="text-2xl text-center font-bold pb-4 text-pink-700">Add a Food review</h2>
            <hr className="horizontal-for-profile-section" />

            <div className="container mx-auto lg:w-60 p-4">
                <CountrySelection onCountryChange={setSelectedCountry} />
                {/* <CitySelector selectedCountry={selectedCountry} /> */}
            </div>
        </div>
    );
};

export default AddFoodReview;