import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
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
            <button className={` fixed  bottom-7 z-50 btn  transition-all ease-in-out delay-100 text-lg md:text-2xl ${visible ? 'lg:right-7 right-3' : '-right-32'}`} onClick={scrollToTop}><FontAwesomeIcon icon={faCircleUp} /></button>
        </div>
    );
};

export default ScrollToTop;