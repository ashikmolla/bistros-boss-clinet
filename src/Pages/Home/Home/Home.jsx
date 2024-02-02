import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShouldTry from "../ShouldTry/ShouldTry";
import Testemonials from "../Testemonials/Testemonials";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ShouldTry></ShouldTry>
            <Featured></Featured>
            <Testemonials></Testemonials>
        </div>
    );
};

export default Home;