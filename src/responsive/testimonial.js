import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './testimonial.css';

function Test()
{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 text-center testpad">
                    <h4 className="text-success">ORGANIC FARMING</h4>
                    <h1 className="testsiz text-warning">Of Organic Food</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores minus iusto dicta, dolores impedit soluta libero labore accusantium expedita quidem obcaecati similique minima cum illum aperiam est alias enim</h3>
                    <input type="button" value="Learn more" className="btn btn-warning"/> 
                </div>
                <div className="col-lg-6 testback">
                   
                </div>

            </div>

        </div>
        </>
    );
}
export default Test;