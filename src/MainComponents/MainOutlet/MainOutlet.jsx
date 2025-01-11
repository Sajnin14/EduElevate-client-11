import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainOutlet = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto space-y-10">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainOutlet;