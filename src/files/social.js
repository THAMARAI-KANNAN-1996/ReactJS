import React from "react";
import Menu from "../menu";
import './social.css'
function Social()
{
    return(
       <>
       <Menu/>
       <div class="sobg1">
        <div>
        <h1 class="head">SOCIAL BUTTON</h1>
        <input type="button" value="Like" class="btn1"/>
        <input type="button" value="Comment" class="btn2"/>
        <input type="button" value="Share" class="btn3"/>
        </div>
       </div>
       </> 
    );
}
export default Social;