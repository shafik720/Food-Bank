import './WeeklyReviewer.css';

const WeeklyReviewer = () => {
    return (
        <div className='py-20 weekly-review-div px-7'>
            <h2 className='mb-10 text-center text-4xl font-bold'>Explore Our Weekly Most Authentic Reviewer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                <div className="review-card shadow-2xl rounded-md px-5 py-8 flex flex-col justify-center items-center font-semibold text-lg">
                    <img className='w-32 h-32 rounded-full mb-5' src="https://i.ibb.co/WnM0kHd/albert-dera-ILip77-Sbm-OE-unsplash-2.jpg" alt="" />
                    <table>
                        <tr>
                            <td>Weekly Authenticity : </td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Alltime Authenticity : </td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Total Reviews : </td>
                            <td>500</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WeeklyReviewer;