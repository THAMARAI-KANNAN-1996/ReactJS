import React,{useEffect, useState} from "react";
export default function Table()
{
    const[prod,setProd]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/frontend.json')
        .then(pro=>pro.json())
        .then(det=>setProd(det))
    },[])
   return(
    <>
    <h1 align="center">Product Details</h1>
    <table width="50%" border="4" align="center">
    <thead align="center">
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
        </tr>
    </thead>
        {
            prod.map((value,index)=>(
                <tbody align="center">
                    <tr>
                        <td>{value.name}</td>
                        <td>{value.price}</td>
                        <td>{value.rat}</td>
                    </tr>
                </tbody>
            )
        )
        }
        </table>
    </>
   ); 
}