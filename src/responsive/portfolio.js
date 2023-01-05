import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './home';
import About from './about';
import Works from './works';
import Farm from './farm';
import Animals from './animals';
import Products from './products';
import Test from './testimonial';

function Portfolio()


{
    return(

        <>
        <Home/>
        <About/>
        <Works/>
        <Farm/>
        <Animals/>
        <Products/>
        <Test/>
        </>
    );
}
export default Portfolio;