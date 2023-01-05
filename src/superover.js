import React from "react";
import './superover.css';
import img1 from './images/supimg1.png';
import img2 from './images/supimg2.png';
import Menu from "./menu";
function Superover()
{
    return(
        <>
        <Menu/>
        <div class="a1">
            <div class="a2">
            <h1 class="a3">Super Over League</h1>
            <img src={img1} className="a3"/>
            <img src={img2} className="a3"/>
            </div>
        </div>
        </>
    );
}
export default Superover;