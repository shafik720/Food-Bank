import './VeganDiv.css';

const VeganDiv = () => {
    return (
        <div className=" vegan-div-parent">
            <h1 className='text-center font-extrabold text-6xl pb-5'>Are You a Vegan ?</h1>
            <p className='text-center pb-10 font-medium text-3xl text-slate-600'>No Problem. We got Your Back. <br /> Here are Some of the Best Rated Vegan Food for you </p>
            <div className='vegan-div text-white text-center bg-fixed'>
                <h2>Vegan Div Here</h2>
            </div>
        </div>
    );
};

export default VeganDiv;