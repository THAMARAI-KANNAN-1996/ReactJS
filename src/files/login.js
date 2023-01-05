import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './login.css';
import img1 from '../images/loginimg2.jpg';
import Menu from "../menu";

function Login(){
    return(
        <>
        <Menu/>
        <div className="lobg1 container-fluid">
            
            <div className="lobg2 row">
                <div className="col-lg-6">
                    <img src={img1} className="col-lg-12"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="col-lg-12 text-center">Member Login</h1>
                    <input type="text" placeholder="email" className="col-lg-12 mb-5"/>
                    <input type="password" placeholder="password" className="col-lg-12 mb-5"/> 
                    <input type="button" value="Login" className="bg-success col-lg-12 mb-5"/>
                    <div className=" col-lg-12 row mb-5">
                        <h5>Forgot <a href="">Username / Password ?</a></h5>
                    </div>
                    <div>
                        <h5>Create New <a href="">Account</a> ?</h5>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}
export default Login;