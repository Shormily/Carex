import React from 'react';
// import Service from "../Home/Service/Service";
import Banner from './Banner/Banner';
import About from './About/About';
import Featurecars from './Featurecars/Featurescar';


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Featurecars/>
        </div>
    );
};

export default Home;