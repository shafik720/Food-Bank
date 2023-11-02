import { useEffect, useState } from "react";
import CountrySelection from "../../../Utilites/Country&CitySelection/CountrySelection";
import CitySelection from "../../../Utilites/Country&CitySelection/CitySelection";
import StateSelection from "../../../Utilites/Country&CitySelection/StateSelection";
import RatingImpression from "../../../Utilites/RatingImpression/RatingImpression";
import { useAddNewFoodReviewMutation, useGetFoodByCountryQuery, useGetFoodByStateQuery, useGetFoodBycityQuery } from "../../../Redux/Features/food/foodApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Utilites/Firebase Auth/firebase.inti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";


const AddFoodReview = () => {

    // --- get country, state & city value
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedState, setSelectedState] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);

    //--- get which state is selected right now in redux state
    const stateStatus = useSelector(state => state.stateOfCountry);
    const selectedStates = parseInt(stateStatus.selectedState);

    //--- get which country is selected right now in redux state
    const countryStatus = useSelector(state => state.country);
    const selectedCountries = parseInt(countryStatus.selectedCountry)

    //--- get which city is selected right now in redux state
    const cityStatus = useSelector(state => state.city);
    const selectedCities = parseInt(cityStatus.selectedCity);
    // console.log(selectedCities);

    // --- get restaturant and food name
    const [restaurant, setRestaurant] = useState('');
    const [foodname, setFoodname] = useState('');

    // --- get food data by country,state, city for auto suggestion in the input field
    const { data: foodByCountry } = useGetFoodByCountryQuery(selectedCountries); // --- get food data by country
    const { data: foodByState } = useGetFoodByStateQuery(selectedStates);// --- get food data by state
    const { data: foodByCity } = useGetFoodBycityQuery(selectedCities);// --- get food data by state
    // console.log(foodByCity);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (selectedCities == 0 && selectedStates != 0 && selectedCountries != 0) {
            // --- this will be triggered when user will select country & state (not city yet)
            const filteredSuggestionsByState = foodByState?.filter(item => item.data.restaurant.toLowerCase().includes(restaurant.toLowerCase()));
            setSuggestions(filteredSuggestionsByState);
            console.log('State triggered !');
        }

        if (selectedCities == 0 && selectedStates == 0 && selectedCountries != 0) {
            // --- this will be triggered when user will select only country (not state & city yet)
            const filteredSuggestionsByCountry = foodByCountry?.filter(item => item.data.restaurant.toLowerCase().includes(restaurant.toLowerCase()));
            setSuggestions(filteredSuggestionsByCountry);
            console.log('Country triggered !');
        }

    }, [restaurant, foodByCountry, foodByState, selectedCities, selectedStates, selectedCountries]);

    // --- when user will click to a suggested restaurent, this function will be triggered and it will set that suggested restaurant name as main restaurant name. 
    const [lockRestaurantName, setLockRestaurantName] = useState(false);
    function handleClickSuggestedRestaurant(e) {
        setRestaurant(e);
        setLockRestaurantName(true);
    }

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
            countryId: selectedCountries,
            stateId: selectedStates,
            cityId: selectedCities,
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
                    <CitySelection stateId={selectedStates} onCityChange={setSelectedCity} />

                    {/* --- Select Restaurant Name --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center mb-3 md:mb-0">Restaurant Name : </p>
                        <span className="relative">
                            {!lockRestaurantName ?
                                <input

                                    onChange={e => setRestaurant(e.target.value)}
                                    value={restaurant}
                                    required
                                    type="text"
                                    placeholder="Type Restaurant Name Here "
                                    className="input input-success w-full max-w-xs  rounded-sm"
                                />
                                :
                                <div className="flex justify-start items-center gap-5">
                                    <p className="text-2xl text-gray-600 font-semibold capitalize ">{restaurant}</p>
                                    <div>
                                        <button onClick={e => setLockRestaurantName(false)} className=" btn-info btn-sm font-semibold text-white hover:text-black">Edit</button>
                                    </div>
                                </div>
                            }

                            {/* Display the suggestions */}
                            {(restaurant?.length && !lockRestaurantName) > 0 && (
                                <ul className="absolute left-0 right-0  bg-slate-100">
                                    {suggestions?.map((item, index) => (
                                        <li className=" hover:bg-blue-300 cursor-pointer py-1 px-4 hover:font-semibold " key={index} onClick={() => handleClickSuggestedRestaurant(item.data.restaurant)}>
                                            {item.data.restaurant}
                                        </li>
                                    ))}

                                    {suggestions?.length == 0 &&
                                        <li className="hover:bg-blue-300 cursor-pointer py-3 px-4 hover:font-semibold flex items-center" onClick={(e) => handleClickSuggestedRestaurant(restaurant)}>
                                            <div className="me-2 border-2 border-slate-600 rounded-full w-5 h-5 flex items-center justify-center  m-0 p-0 text-xs"><FontAwesomeIcon icon={faPlus} /></div> <span className="text-xl text-emerald-600 font-bold">{restaurant}</span>
                                        </li>
                                    }
                                </ul>
                            )}
                        </span>
                    </div>

                    {/* --- Select Food Name --- */}
                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <p className="font-semibold text-slate-800 text-center mb-3 md:mb-0">Food Name : </p>
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
                        <p className="font-semibold text-slate-800 text-center mb-3 md:mb-0">Food Img : </p>
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
                        <p className="font-semibold text-slate-800 text-center mb-3 md:mb-0">Give Your Rating : </p>
                        <span className="flex items-center justify-center md:justify-normal">
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
                        <div className="flex items-center justify-center md:justify-normal">
                            {/*  this component will generate animated emoticon according to the user's rating selection to give the user a better ui */}
                            <div className="text-lg font-semibold">
                                <RatingImpression selectedRating={rating} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-2 justify-center items-center mt-8">
                        <div></div>
                        <div className="text-center md:text-left" >
                            <button className="btn btn-active btn-success w-52 hover:bg-red-800 hover:text-white border-none">Submit Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFoodReview;