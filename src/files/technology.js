import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './technology.css';
import img1 from '../images/data1.jpg'
import img2 from '../images/data2.jpg'
import img3 from '../images/data3.jpg'
import img4 from '../images/data4.jpg'
import Menu from "../menu";
function Technology()
{
    return(
        <>
        <Menu/>
            <div className="container-fluid back1">
            <h1 className="col-lg-12 text-center">Learn 4.0 Technologies</h1>
            <p className="col-lg-12 text-center">Get trained by alumini of IIT's and top companies like Amazon,Microsoft,intel,Nvidia,
            Qualcomm,etc.Learn Directly from professionals involved in Product Development.</p> 
            </div>
            <div className="p-5">
            <div class="row container-fluid">
                <div class="col-sm-6">
                    <div class="card shadow bor1 mb-5">
                        <div class="card-body">
                        <h5 class="card-title">Data Scientist</h5>
                        <p class="card-text">Data scientist gather and analyze large sets of structured and unstructured data.</p>
                        <img src={img1} className="tec p-1 col-sm-6"/>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                <div class="card shadow bor2">
                <div class="card-body">
                    <h5 class="card-title">IOT Developer</h5>
                    <p class="card-text">IOT Developer are professional who can develop,manage and monitor IOT devices.</p>
                    <img src={img2} className="tec p-1 col-sm-6"/>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>

                    <div className="p-5">
                    <div class="row container-fluid">
                <div class="col-sm-6">
                    <div class="card shadow bor3 mb-5">
                        <div class="card-body">
                        <h5 class="card-title">VR Developer</h5>
                        <p class="card-text">A VR Developer creates completely new digital environment that people can see.</p>
                        <img src={img3} className="tec p-1 col-sm-6"/>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                <div class="card shadow bor4">
                <div class="card-body">
                    <h5 class="card-title">ML Engineer</h5>
                    <p class="card-text">Machine Learning engineers feed data into models defined by data scientists.</p>
                    <img src={img4} className="tec p-1 col-sm-6"/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
        </>
    );
}
export default Technology;