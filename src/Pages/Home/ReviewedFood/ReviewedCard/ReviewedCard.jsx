import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingImpression from "../../../../Utilites/RatingImpression/RatingImpression";
import { useEffect } from "react";
import { useGetSingleCityQuery } from "../../../../Redux/Features/city/cityApi";
import { useGetSingleStateQuery } from "../../../../Redux/Features/state/stateApi";
import { useGetSingleCountryQuery } from "../../../../Redux/Features/country/countryApi";


const ReviewedCard = ({ data }) => {
    const { foodname, imgUrl, rating, restaurant, countryId, stateId, cityId } = data.data;


    // --- getting single city details with redux from mongodb
    const { data: singleCity } = useGetSingleCityQuery(cityId);

    // --- getting single state details with redux from mongodb
    const { data: singleState } = useGetSingleStateQuery(stateId);

    // --- getting single country details with redux from mongodb
    const { data: singleCountry } = useGetSingleCountryQuery(countryId);


    return (
        <div className="vegan-card bg-white w-52 pb-9 pt-4 px-4">

            {/* === Food Name === */}
            <div className="w-40 h-40 overflow-hidden flex justify-center items-start mx-auto">
                <img className=' w-full ' src={imgUrl || 'https://i.ibb.co/k1ydWxp/recipes-21-700x600.jpg'} alt="" />
            </div>

            <h2 className='text-slate-900 font-semibold text-lg '>{foodname}</h2>

            {/* === rating section starts === */}
            <div className="rating-div flex justify-center items-center mt-4 ">
                <p className='text-black'>Rating : </p>
                <div className="bg-orange-400 flex justify-center items-center gap-2 px-2 ms-2">
                    <p className='text-xl'>{rating}</p>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
            <div className="text-white border-white mt-3 border-4 flex justify-center items-center rounded-full bg-emerald-500">
                <RatingImpression selectedRating={rating} />
            </div>
            {/* === Rating Section Starts === */}

            {/* === Restaurant Details Starts === */}
            <div className="restaurant-details-div text-black mt-5 text-start">
                <div className="">
                    <p className=" text-red-800">Restaurant :</p>
                    <p className="font-bold text-xl capitalize"> {restaurant} </p>
                </div>
                <div>
                    <p className=" text-red-800">Country :</p>
                    <div className="flex justify-start items-center gap-4">
                        <p className="font-bold "> {singleCountry?.country_name} </p>
                        <img className="w-5" src={`https://flagcdn.com/w320/${singleCountry?.sortname.toLowerCase()}.png`} alt="" />
                    </div>
                </div>
                <div>
                    <p className=" text-red-800">State :</p>
                    <p className="font-bold "> {singleState?.state_name} </p>
                </div>
                <div>
                    <p className=" text-red-800">City :</p>
                    <p className="font-bold text-red"> {singleCity?.city_name} </p>
                </div>
            </div>

        </div>
    );
};

export default ReviewedCard;