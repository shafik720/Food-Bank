import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryDiv from "../CategoryDiv/CategoryDiv";
import VeganDiv from "../VeganDiv/VeganDiv";
import WeeklyReviewer from "../WeeklyReviewer/WeeklyReviewer";
import ReviewedFood from "../ReviewedFood/ReviewedFood";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Food Bank</title>
                <link rel="icon" type="image/svg+xml" href="https://i.ibb.co/NtS7rNm/cutlery.png" />
            </Helmet>
            <Banner></Banner>
            <CategoryDiv></CategoryDiv>
            {/* <VeganDiv></VeganDiv> */}
            <ReviewedFood></ReviewedFood>
            <WeeklyReviewer></WeeklyReviewer>

            <p className="my-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsam. Veritatis itaque doloribus obcaecati non fugiat, earum corporis eos! Distinctio atque illum nostrum facere, odio dicta quas. Sed, incidunt officia? Omnis cum necessitatibus possimus voluptate, magnam unde vel eligendi nihil vero labore? Obcaecati porro repellendus deserunt non quibusdam, deleniti cupiditate.</p>
        </div>
    );
};

export default Home;