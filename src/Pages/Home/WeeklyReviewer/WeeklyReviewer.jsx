import './WeeklyReviewer.css';

const WeeklyReviewer = () => {
    return (
        <div className='py-20 weekly-review-div px-7'>

            {/* ---------- Weekly Reviewers Div ------------- */}

            <h2 className='mb-10 text-center text-4xl font-bold'>Explore Our Weekly Most Authentic Reviewer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">

                {/* --- Single Review Card --- */}
                <div className="review-card shadow-2xl rounded-lg px-3 py-8 flex flex-col justify-center items-center font-semibold border-4 ">
                    <img className='w-32 h-32 rounded-full mb-5' src="https://i.ibb.co/WnM0kHd/albert-dera-ILip77-Sbm-OE-unsplash-2.jpg" alt="" />
                    <div className="stats-div  text-center ">
                        <div className="">
                            <p>Last Week Authenticity :</p>
                            <span className='flex items-center gap-2'>
                                <p>75%</p>
                                <progress className="progress progress-secondary " value="70" max="100"></progress>
                            </span>
                            {/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-3/4" > 45%</div>
                            </div> */}
                        </div>
                        
                        <div className="mt-5">
                            <p>All Time Authenticity :</p>
                            <span className='flex items-center gap-2'>
                                <p>55%</p>
                                <progress className="progress progress-info " value="55" max="100"></progress>
                            </span>
                        </div>
                        <div className="mt-2">
                            <p>Total Reviews :</p>
                            <div className='flex items-center justify-center gap-2 bg-orange-400 text-white rounded-full mt-2'>
                                <p>180</p>
                                <p>Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* <table className='w-full'>
                        <tr className=''>
                            <td className='border'>Weekly Authenticity : </td>
                            <td className='border w-full'>
                                <progress className="progress progress-secondary " value="70" max="100"></progress>

                            </td>
                        </tr>
                        <tr>
                            <td>Alltime Authenticity : </td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Total Reviews : </td>
                            <td>500</td>
                        </tr>
                    </table> */}
                </div>
            </div>
        </div>
    );
};

export default WeeklyReviewer;