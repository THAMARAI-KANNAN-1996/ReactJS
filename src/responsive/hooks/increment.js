import React,{useState} from "react";
export default function Increment()
{
    const [increment,setIncrement]=useState(0)
    function decre()
    {
        setIncrement(increment-1)
    }
    return(
        
        <>
        
        <input type="button" onClick={()=>setIncrement(increment+1)} value="ADD"/><br/><br/>
        <h1>{increment}</h1>
        <button onClick={decre}>SUB</button><br/><br/>
        <input type="button" onClick={()=>setIncrement(increment*0)} value="DELETE"/><br/><br/>
        
        </>
    );
} 