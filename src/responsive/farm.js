import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './farm.css';
import img1 from '../images/homelogo.png'
function Farm()
{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-sm-12 farmbg">
                     
                </div>
                <div className="col-lg-6">
                    <img src={img1} className="container p-5"/>
                    <h3>how your food is grown or raised can have a major impact on your mental and emotional health as well as the environment </h3>
                    <input type="button"value="LEARN MORE" className="btn btn-success"/>
                     
                </div>

            </div>

        </div>
        <hr/>
        </>
    );
}
export default Farm;