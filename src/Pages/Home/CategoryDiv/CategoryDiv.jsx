import './CategoryDiv.css';

const CategoryDiv = () => {
    return (
        <div className='py-20 category-div'>
            <h1 className='text-center font-bold text-5xl'>Find The Most Common Category </h1>

            {/* ------------ Category Box ---------------- */}
            <div className="category-box px-6 my-7 mx-auto gap-5 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="category-card cursor-pointer ">
                    <img className='w-3/4 md:w-64' src="https://i.ibb.co/p3wMx2T/sweets-categ-400x500.jpg" alt="" />
                    <p className='text-4xl text-white font-medium '>Sweets</p>
                </div>
                <div className="category-card cursor-pointer">
                    <img className='w-3/4 md:w-64' src="https://i.ibb.co/3d6L3NF/burger-categ-400x500.jpg" alt="" />
                    <p className='text-4xl text-white font-medium '>Burger</p>
                </div>
                <div className="category-card cursor-pointer">
                    <img className='w-3/4 md:w-64' src="https://i.ibb.co/XWsXFkX/drinks-categ-400x500.jpg" alt="" />
                    <p className='text-4xl text-white font-medium '>Drinks</p>
                </div>
                <div className="category-card cursor-pointer">
                    <img className='w-3/4 md:w-64' src="https://i.ibb.co/pj7whPz/pizza-categ-400x500.jpg" alt="" />
                    <p className='text-4xl text-white font-medium '>Pizza</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryDiv;