import { useEffect, useState } from "react";
import CountrySelection from "../../../Utilites/Country&CitySelection/CountrySelection";
import CitySelection from "../../../Utilites/Country&CitySelection/CitySelection";
import StateSelection from "../../../Utilites/Country&CitySelection/StateSelection";
import RatingImpression from "../../../Utilites/RatingImpression/RatingImpression";
import { useAddNewFoodReviewMutation, useGetFoodByCountryQuery } from "../../../Redux/Features/food/foodApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Utilites/Firebase Auth/firebase.inti";


const AddFoodReview = () => {

    // --- get country, state & city value
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedState, setSelectedState] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);

    // --- get restaturant and food name
    const [restaurant, setRestaurant] = useState('');
    const [foodname, setFoodname] = useState('');

    const { data: foodByCountry } = useGetFoodByCountryQuery(parseInt(selectedCountry))
    // console.log(foodByCountry);
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const filteredSuggestions = foodByCountry?.filter(item => item.data.restaurant.toLowerCase().includes(restaurant.toLowerCase()));
        setSuggestions(filteredSuggestions);
        // console.log(filteredSuggestions);
    }, [restaurant]);

    // --- get the value of rating
    const [rating, setRating] = useState(5);
    const handleRating = (e) => {
        const selectedRating = parseInt(e.target.value);
        setRating(selectedRating)
    }

    // --- select img url for food's pic
    const [imgUrl, setImgUrl] = useState('');

    // --- get user information
    const [user, loading] = useAuthState(auth);

    // --- add a food review to database with Redux
    const [addFoodReview, { data, isLoading, isError, error }] = useAddNewFoodReviewMutation();

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        addFoodReview({
            countryId: selectedCountry,
            stateId: selectedState,
            cityId: selectedCity,
            restaurant,
            foodname,
            rating,
            userEmail: user.email,
            userId: user.uid,
            imgUrl
        })
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
                            <input
                                onBlur={e => setRestaurant(e.target.value)}
                                onKeyUp={e => setRestaurant(e.target.value)}
                                defaultValue={restaurant}
                                required
                                type="text"
                                placeholder="Type Restaurant Name Here "
                                className="input input-success w-full max-w-xs  rounded-sm"
                            />
                            {/* Display the suggestions */}
                            {suggestions?.length > 0 && (
                                <ul>
                                    {suggestions.map((item, index) => (
                                        <li key={index} onClick={() => setRestaurant(item.data.restaurant)}>
                                            {item.data.restaurant}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </span>
                    </div>

                    {/* --- Select Food Name --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center">Food Name : </p>
                        <span>
                            <input
                                onBlur={e => setFoodname(e.target.value)}
                                required type="text"
                                placeholder="Type Food Name Here  "
                                className="input input-success w-full max-w-xs rounded-sm"
                            />
                        </span>
                    </div>

                    {/* --- Select Food Picture --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center">Food Img : </p>
                        <span>
                            <input
                                onBlur={e => setImgUrl(e.target.value)}
                                type="text"
                                placeholder="Type Img Url"
                                className="input input-success w-full max-w-xs rounded-sm"
                            />
                        </span>
                    </div>

                    {/* --- Select Rating --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center">Give Your Rating : </p>
                        <span className="flex items-center">
                            <div className="rating rating-lg">
                                <input type="radio" value="1" onChange={handleRating} name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value="2" onChange={handleRating} name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value="3" onChange={handleRating} name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value="4" onChange={handleRating} name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value="5" onChange={handleRating} name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </span>
                    </div>

                    {/* --- Rating impression --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-start items-center mt-8">
                        <div></div>
                        <div className="flex items-center">
                            {/*  this component will generate animated emoticon according to the user's rating selection to give the user a better ui */}
                            <div className="text-lg font-semibold">
                                <RatingImpression selectedRating={rating} />
                            </div>
                        </div>
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