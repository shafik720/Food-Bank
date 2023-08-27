import './Banner.css';
import searchIcon from '../../../assets/img/search.png';

const Banner = () => {
    return (
        <div className="banner-div py-48 px-5 lg:px-10 lg:flex justify-between items-start ">

            <div className="lg:text-left text-center ">
                <div className="banner-title text-white mb-7">
                    <h1 className='text-5xl font-bold '>Heart is <br /> Where the Food is</h1>
                    <div className="my-6 text-xl font-medium">
                        <p>Find out the Best Food in your locality within a minute .</p>
                        <p>Share your experience about the last food you enjoyed !</p>
                    </div>
                </div>

                {/* --- Search Box ('Join' Component from DaisyUI) --- */}

                <div className="join text-white flex flex-col mx-auto  md:flex-row md:w-2/3 lg:w-auto">
                    <div>
                        <div>
                            <input className="input input-bordered md:join-item bg-transparent  border-white  border-4 md:rounded-s-full md:border-2 md:w-80 md:my-0 w-3/4 rounded-full my-5" placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered md:join-item bg-transparent border-white border-4 w-3/4  rounded-full mx-auto md:rounded-s-full md:border-2 md:my-0 ">
                        <option disabled selected>City</option>
                        <option className='text-black font-bold'>New York</option>
                        <option className='text-black font-bold'>California</option>
                        <option className='text-black font-bold'>Washington</option>
                    </select>
                    <div className="indicator mx-auto mt-5 w-3/4 md:mt-0 ">
                        <button className="btn md:join-item md:rounded-r-full rounded-full w-full"> <img src={searchIcon} alt="" width={'20px'} /> </button>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    );
};

export default Banner;