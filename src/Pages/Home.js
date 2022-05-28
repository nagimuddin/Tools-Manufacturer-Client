import React from 'react';
import Bennar from './Bennar';
import Pricing from './Pricing';
import Products from './Products';
import Steps from './Steps';
import Testimunial from './Testimunial';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Products></Products>
            <Steps></Steps>
            <Pricing></Pricing>
            <Testimunial></Testimunial>
        </div>
    );
};

export default Home;