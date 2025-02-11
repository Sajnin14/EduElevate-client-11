import { useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';
import { useEffect } from "react";


const ScrollToSection = () => {
    const {hash} = useLocation();

    useEffect(() => {
        if(hash){
             const element = document.getElementById(hash.replace('#', ''));
             if(element){
                element.scrollIntoView({behavior: 'smooth'})
             }
        }

    },[hash])
    return null;
};

// ScrollToSection.propTypes = {
//     hash: PropTypes.any,
// }
export default ScrollToSection;