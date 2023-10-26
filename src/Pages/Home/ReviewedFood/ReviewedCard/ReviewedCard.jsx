import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pagination } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";


const ReviewedCard = ({ data }) => {
    return (
            <div className="vegan-card bg-white w-52 pb-9 pt-4 px-4">
                <img className='w-full' src="https://i.ibb.co/k1ydWxp/recipes-21-700x600.jpg" alt="" />
                <h2 className='text-slate-900 font-semibold text-lg '>Cheesy Sausage Lasagna with soup</h2>
                <div className="rating-div flex justify-center items-center mt-4 ">
                    <p className='text-black'>Rating : </p>
                    <div className="bg-orange-400 flex justify-center items-center gap-2 px-2 ms-2">
                        <p className='text-xl'>5</p>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            </div>
    );
};

export default ReviewedCard;