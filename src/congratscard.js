import React from "react";
import './congratscard.css';
import img2 from './images/cardimg2.png';
import img3 from './images/cardimg3.png';
import Menu from "./menu";
function Congratscard()
{
    return(
        <>
        <Menu/>
            <div class="congratsback">
                <h1>Congratulations</h1>
                <div className="congratsbacks">
                        <img src={img2}/> <br/>
                        <h3>KIRAN V</h3> <br/>
                        <p>Vishnu Institute of Computer Education and Technology,Coimbatore</p>
                        <img src={img3}/>
                </div>
                
            </div>

        </>
    );
}
export default Congratscard