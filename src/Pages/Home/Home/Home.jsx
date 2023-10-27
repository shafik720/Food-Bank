import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryDiv from "../CategoryDiv/CategoryDiv";
import VeganDiv from "../VeganDiv/VeganDiv";
import WeeklyReviewer from "../WeeklyReviewer/WeeklyReviewer";
import ReviewedFood from "../ReviewedFood/ReviewedFood";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);
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

            <button className={` fixed  bottom-7 z-50 btn  transition-all ease-in-out delay-100 text-2xl ${visible ? 'right-7' : '-right-32'}`} onClick={scrollToTop}><FontAwesomeIcon icon={faCircleUp} /></button>

            <p className="my-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsam. Veritatis itaque doloribus obcaecati non fugiat, earum corporis eos! Distinctio atque illum nostrum facere, odio dicta quas. Sed, incidunt officia? Omnis cum necessitatibus possimus voluptate, magnam unde vel eligendi nihil vero labore? Obcaecati porro repellendus deserunt non quibusdam, deleniti cupiditate.</p>
        </div>
    );
};

export default Home;