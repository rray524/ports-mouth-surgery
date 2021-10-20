import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import Team from './Team/Team';

const Home = () => {
    return (
        <div className="home-wrap">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;