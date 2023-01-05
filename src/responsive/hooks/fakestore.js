import React,{useEffect, useState} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import './frontend.css'
export default function Fackstore()
{
    const[details,setDetails]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(info=>info.json())
        .then(data=>setDetails(data))
    },[])
    return(
        <>
            <div className="row col-lg-12 justify-content-center">
            {details.map((value,index) => (
                            <div className="card col-lg-3 m-5 shadow fs">
                                <img className="card-img-top" src={value.image} alt="Card image cap" height="300" width="300"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">${value.price}</p>
                                        <p><StarRatings rating={value.rating.rate} starRatedColor="gold" starDimension="20px"/></p>
                                        <Link to={`/details/${value.id}`}><a>view more</a></Link>
                                    </div>
                                </div>

            ))}
            </div>
        </>
    );
}