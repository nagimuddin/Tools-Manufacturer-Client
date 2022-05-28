import React from 'react';
import Bennar from './Bennar';
import Pricing from './Pricing';
import Products from './Products';
import Steps from './Steps';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Products></Products>
            <Steps></Steps>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;