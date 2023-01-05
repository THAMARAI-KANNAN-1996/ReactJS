import React,{useState} from "react";
export default function Datee()
{
    function getdata()
    {
        var date1=document.getElementById("date1").value;
        var final=new Date(date1);
        final.setDate(final.getDate()+90);
        document.getElementById("print").innerHTML=final.getDate()+"/"+final.getMonth()+"/"+final.getFullYear();
    }


   return(
    <>
    <h1>Course Completion Date</h1>
    <input type="date" id="date1"/>
    <br/>
    <button onClick={getdata}>Check</button>
    <h1 id="print"></h1>
    </>
   ); 
}