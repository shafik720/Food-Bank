import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-div py-48 flex justify-around items-start">

            <div className="text-left ">

                <div className="banner-title text-white mb-7">
                    <h1 className='text-6xl font-bold'>Heart is Where the Food is !</h1>
                    <div className="my-6 text-xl">
                        <p>Find out the Best Food in your locality within a minute </p>
                        <p>Find out which food people love around your place</p>
                    </div>
                </div>

                {/* --- Search Box ('Join' Component from DaisyUI) --- */}

                <div className="join text-white">
                    <div>
                        <div>
                            <input className="input input-bordered join-item bg-transparent border-white rounded-s-full" placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered join-item bg-transparent border-white ">
                        <option disabled selected>Filter</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator">
                        <button className="btn join-item rounded-r-full">Search</button>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    );
};

export default Banner;