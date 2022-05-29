import React from 'react';
import Bennar from './Bennar';
import Pricing from './Stetistics';
import Products from './Products';
import Steps from './Steps';
import Testimunial from './Testimunial';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Products></Products>
            <Steps></Steps>
            <Pricing></Pricing>
            <Contact></Contact>
            <Testimunial></Testimunial>
        </div>
    );
};

export default Home;