import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './animals.css';
import img1 from '../images/animalslogo.png'
function Animals()
{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 animalsbg"></div>
            
            <div className="col-lg-6 animalspad text-center">
                <img src={img1} className="col-lg-8"/>
                <h4>Happy Farming</h4>
                <h1>Happy Animals</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla id deserunt possimus sed omnis explicabo sequi commodi voluptates animi vero, incidunt quod veniam, aperiam cum nobis labore cumque eveniet velit!</h3>
                <input type="button" value="Learn More" className="btn btn-success"/>
            </div>
            </div>
        </div>
        
        </>
    );

}
export default Animals;