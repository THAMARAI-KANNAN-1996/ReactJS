import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './home.css';
import img1 from '../images/homelogo.png';

function Home()
{
    return(
        <>

            <div className="container-fluid homebg">
                 <div className="row">
                    <div className="col-lg-6">

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
export default Home;