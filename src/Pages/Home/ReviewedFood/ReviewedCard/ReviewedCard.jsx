import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ReviewedCard = ({ data }) => {
    const { foodname, imgUrl, rating, restaurant } = data.data;
    console.log(data);
    return (
        <div className="vegan-card bg-white w-52 pb-9 pt-4 px-4">

            <div className="w-40 h-40 overflow-hidden flex justify-center items-start mx-auto">
                <img className='w-full' src={imgUrl || 'https://i.ibb.co/k1ydWxp/recipes-21-700x600.jpg'} alt="" />
            </div>

            <h2 className='text-slate-900 font-semibold text-lg '>{foodname}</h2>
            <div className="rating-div flex justify-center items-center mt-4 ">
                <p className='text-black'>Rating : </p>
                <div className="bg-orange-400 flex justify-center items-center gap-2 px-2 ms-2">
                    <p className='text-xl'>{rating}</p>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
    );
};

export default ReviewedCard;