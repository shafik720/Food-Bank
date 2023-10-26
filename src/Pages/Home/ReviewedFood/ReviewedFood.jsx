import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";
import './ReviewedFood.css' ;
import { useGetAllFoodReviewQuery } from "../../../Redux/Features/food/foodApi";
import { ClipLoader } from "react-spinners";
import ReviewedCard from "./ReviewedCard/ReviewedCard";

const ReviewedFood = () => {

    // --- getting all the reviewed food item's data from database with Redux Query
    const {data, isLoading, isError, error} = useGetAllFoodReviewQuery();

    // --- deciding what to render while fetching data from server with redux
    let content = null;

    // --- when fetching-data process is in loading state
    if (isLoading && !isError) {
        content = <div className="my-8"><ClipLoader color="black" size={35} /></div>
    }

    // --- when there is a error happened while fetching-data 
    if (!isLoading && isError) {
        console.log(error);
        content = <div className=" text-red-600 font-bold">
            {error.error}
        </div>;
    }


    if (!isLoading && !isError && data?.length > 0) {
        content = data.map(index => <ReviewedCard key={index._id} data={index}></ReviewedCard>)

    }  

    return (
        <div className=" reviewed-food-div-parent ">
            <h1 className='text-center font-extrabold text-6xl pb-5'>Recently Reviewed Food</h1>
            <p className='text-center pb-10 font-medium text-3xl text-slate-600'>Check out the last reviewed food <br /> from the users around your neighboorhood </p>
            <div className='vegan-div text-white text-center bg-fixed '>

                <div className="">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper "
                    >
                        <SwiperSlide className='lg:ms-80  '>
                            <div className="vegan-card bg-white w-52 pb-9 pt-4 px-4 mx-auto">
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
                        </SwiperSlide>
                        <SwiperSlide className='mx-auto'>
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
                        </SwiperSlide>
                        <SwiperSlide className='mx-auto'>
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
                        </SwiperSlide>
                        
                        {/* {content} */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ReviewedFood;