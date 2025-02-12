import useTitle from "../../AuthProvider/useTitle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Course from "./Course";
import Popular from "./Popular";
import Reviews from "./Reviews";

const Home = () => {
    useTitle("home");
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <Popular></Popular>
            <Course></Course>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;