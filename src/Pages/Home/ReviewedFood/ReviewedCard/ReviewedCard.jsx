import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingImpression from "../../../../Utilites/RatingImpression/RatingImpression";
import { useEffect } from "react";
import { useGetSingleCityQuery } from "../../../../Redux/Features/city/cityApi";


const ReviewedCard = ({ data }) => {
    const { foodname, imgUrl, rating, restaurant, countryId, stateId, cityId } = data.data;


    // --- getting single city details with redux
    const {data : singleCity} = useGetSingleCityQuery(cityId);

    
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
                    <p>Restaurant :</p>
                    <p className="font-bold text-xl capitalize"> {restaurant} </p>
                </div>
                <div>
                    Country : {}
                </div>
                <div>
                    State : {}
                </div>
                <div>
                    <p>City :</p>
                    <p className="font-bold "> {singleCity?.city_name} </p>
                </div>
            </div>

        </div>
    );
};

export default ReviewedCard;