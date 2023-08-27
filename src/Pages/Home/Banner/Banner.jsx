import './Banner.css';
import searchIcon from '../../../assets/img/search.png';

const Banner = () => {
    return (
        <div className="banner-div py-48 px-10 flex justify-between items-start">

            <div className="text-left ">

                <div className="banner-title text-white mb-7">
                    <h1 className='text-5xl font-bold '>Heart is <br /> Where the Food is</h1>
                    <div className="my-6 text-xl font-medium">
                        <p>Find out the Best Food in your locality within a minute .</p>
                        <p>Share your experience about the last food you enjoyed !</p>
                    </div>
                </div>

                {/* --- Search Box ('Join' Component from DaisyUI) --- */}

                <div className="join text-white ">
                    <div>
                        <div>
                            <input className="input input-bordered join-item bg-transparent border-white rounded-s-full w-80" placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered join-item bg-transparent border-white ">
                        <option disabled selected>City</option>
                        <option className='text-black font-bold'>New York</option>
                        <option className='text-black font-bold'>California</option>
                        <option className='text-black font-bold'>Washington</option>
                    </select>
                    <div className="indicator">
                        <button className="btn join-item rounded-r-full"> <img src={searchIcon} alt="" width={'20px'} /> </button>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    );
};

export default Banner;