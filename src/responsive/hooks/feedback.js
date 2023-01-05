import React from "react";
import '../hooks/feedback.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Feedback()
{
    return(
        <>
            <div className="container-fluid bg-info">
                <div className="container bg-white">
                    <div className="row text-center">
                        <div>
                            <h1>
                                How satisfied are you with our customer care performance?
                            </h1>
                        </div>
                        <div className="col-lg-4 p-5">
                            <Link to='/feedback1'><FontAwesomeIcon icon={faFaceLaugh} className="text-warning siz" /></Link>
                            <h1>Happy</h1>
                        </div>
                        <div className="col-lg-4 p-5">
                            <Link to='/feedback1'><FontAwesomeIcon icon={faFaceSadCry} className="text-warning  siz" /></Link>
                            <h1>Sad</h1>
                        </div>
                        <div className="col-lg-4 p-5">
                            <Link to='/feedback1'><FontAwesomeIcon icon={faFaceAngry} className="text-warning  siz" /></Link>
                            <h1>Angry</h1>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}
export default Feedback;