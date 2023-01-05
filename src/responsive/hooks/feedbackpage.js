import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import '../hooks/feedback.css'
function Feedbackpage()
{
    return(
        <>
        <div className="container-fluid bg-warning p-5">
            <div className="container bg-white p-5">
                <div className="row text-center">
                    <div className="col-lg-12">
                         <FontAwesomeIcon icon={faHeart} className="text-danger siz"/>
                    </div>
                    <div className="col-lg-12">
                        <h1>Thank you !</h1>
                    </div>
                    <div className="col-lg-12">
                        <h3>We will use your feedback to improve our customer support performance</h3>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
export default Feedbackpage;