import './VeganDiv.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const VeganDiv = () => {
    return (
        <div className=" vegan-div-parent ">
            <h1 className='text-center font-extrabold text-6xl pb-5'>Are You a Vegan ?</h1>
            <p className='text-center pb-10 font-medium text-3xl text-slate-600'>No Problem. We got Your Back. <br /> Here are Some of the Best Rated Vegan Food for you </p>
            <div className='vegan-div text-white text-center bg-fixed '>

                {/* --- Single Card --- */}
                {/* <div className="vegan-card bg-white w-52 pb-9 pt-4 px-4">
                    <img className='w-full' src="https://i.ibb.co/k1ydWxp/recipes-21-700x600.jpg" alt="" />
                    <h2 className='text-slate-900 font-semibold text-lg '>Cheesy Sausage Lasagna with soup</h2>
                    <div className="rating-div flex justify-center items-center mt-4 ">
                        <p className='text-black'>Rating : </p>
                        <div className="bg-orange-400 flex justify-center items-center gap-2 px-2 ms-2">
                            <p className='text-xl'>5</p>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div> */}
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
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default VeganDiv;