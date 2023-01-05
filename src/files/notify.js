import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck,faBell} from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import './notify.css'
import Menu from "../menu";

function Notify()
{
    return(
        <>
        <Menu/>
        <div className="container col-lg-6">
        <h1 className="text-center mb-5">Notification</h1>
        <div className="bg-primary d-flex flex-row p-3 mb-5">
            <FontAwesomeIcon icon={faCircleCheck} className='siz mr-5'/>
            <h2 className="head2">Information Message</h2>
        </div>
        <div className="bg-success  d-flex flex-row p-3 mb-5">
            <FontAwesomeIcon icon={faCircleCheck} className='siz mr-5'/>
            <h2 className="head2">Success Message</h2>
        </div>
        <div className="bg-warning  d-flex flex-row p-3 mb-5">
            <FontAwesomeIcon icon={faBell} className='siz mr-5'/>
            <h2 className="head2">Warning Message</h2>
        </div>
        <div className="bg-danger  d-flex flex-row p-3 mb-5">
            <FontAwesomeIcon icon={faCircleExclamation} className='siz mr-5'/>
            <h2 className="head2">Error Message</h2>
        </div>
        </div>
        </>
    );
}
export default Notify;