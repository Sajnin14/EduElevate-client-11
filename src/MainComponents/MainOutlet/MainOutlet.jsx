import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToSection from "../Home/ScrollToSection";


const MainOutlet = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollToSection></ScrollToSection>
            <div className="w-11/12 mx-auto space-y-16">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainOutlet;