import { Helmet } from 'react-helmet-async';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-div'>
            <Helmet>
                <title>Shop Now</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2>Shop Here !</h2>
        </div>
    );
};

export default Shop;