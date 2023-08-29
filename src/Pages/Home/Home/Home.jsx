import Banner from "../Banner/Banner";
import CategoryDiv from "../CategoryDiv/CategoryDiv";
import RecentFood from "../RecentFood/RecentFood";
import VeganDiv from "../VeganDiv/VeganDiv";
import WeeklyReviewer from "../WeeklyReviewer/WeeklyReviewer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryDiv></CategoryDiv>
            <VeganDiv></VeganDiv>
            <WeeklyReviewer></WeeklyReviewer>

            <p className="my-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsam. Veritatis itaque doloribus obcaecati non fugiat, earum corporis eos! Distinctio atque illum nostrum facere, odio dicta quas. Sed, incidunt officia? Omnis cum necessitatibus possimus voluptate, magnam unde vel eligendi nihil vero labore? Obcaecati porro repellendus deserunt non quibusdam, deleniti cupiditate.</p>
        </div>
    );
};

export default Home;