import { useEffect, useState } from "react";
import CountrySelection from "../../../Utilites/Country&CitySelection/CountrySelection";
import CitySelection from "../../../Utilites/Country&CitySelection/CitySelection";
import StateSelection from "../../../Utilites/Country&CitySelection/StateSelection";


const AddFoodReview = () => {
    const [selectedCountry, setSelectedCountry] = useState(0) ;
    const [selectedState, setSelectedState] = useState(0) ; 
    const [selectedCity, setSelectedCity] = useState(0) ;

    const [restaurant, setRestaurant] = useState('');
    const [foodname, setFoodname] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        console.log('Country Id : ',selectedCountry);
        console.log('State Id : ',selectedState);
        console.log('City Id : ',selectedCity);
        console.log('Restaurant Name : ', restaurant);
        console.log('Food Name : ', foodname);
    }

    return (
        <div className="container add-food-review w-full">
            <h2 className="text-2xl text-center font-bold pb-4 text-pink-700">Add a Food review</h2>
            <hr className="horizontal-for-profile-section" />

            <div className="mx-auto lg:max-w-2xl p-4">
                <form action="" onSubmit={handleReviewSubmit}>
                    <CountrySelection onCountryChange={setSelectedCountry} />
                    <StateSelection countryId={selectedCountry} onStateChange={setSelectedState} />
                    <CitySelection stateId={selectedState} onCityChange={setSelectedCity} />

                    {/* --- Select Restaurant Name --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center">Restaurant Name : </p>
                        <span>
                            <input onBlur={e => setRestaurant(e.target.value)} required type="text" placeholder="Type Restaurant Name Here " className="input input-success w-full max-w-xs  rounded-sm" />
                        </span>
                    </div>

                    {/* --- Select Food Name --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center">Food Name : </p>
                        <span>
                            <input onBlur={e => setFoodname(e.target.value)} required type="text" placeholder="Type Food Name Here  " className="input input-success w-full max-w-xs rounded-sm" />
                        </span>
                    </div>

                    {/* --- Select Rating --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center">Give Your Rating : </p>
                        <span>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </span>
                    </div>

                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <div></div>
                        <button className="btn btn-active btn-success w-52 hover:bg-red-800 hover:text-white border-none ">Submit Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFoodReview;