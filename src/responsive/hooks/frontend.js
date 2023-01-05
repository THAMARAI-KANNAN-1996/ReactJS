import React,{useEffect, useState} from "react";
import StarRatings from "react-star-ratings";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../hooks/frontend.css'
export default function Frontend()
{
    const[details,setDetails]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/frontend.json")
        .then(info=>info.json())
        .then(data=>setDetails(data))
    },[])
    return(
        <>
            <div className="row col-lg-12 justify-content-center">
            {details.map((value,index) => (
                            <div className="card col-lg-3 m-5 shadow">
                                <img className="card-img-top" src={value.image} alt="Card image cap" height="300" width="300"/>
                                    <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <p className="card-text">{value.description}</p>
                            <p className="card-text">{value.price}</p>
                            <p>
                            <StarRatings rating={value.rat} starRatedColor="gold" starDimension="20px" starSpacing="10px"/>
                            </p>
                            <a href="#" className="btn btn-primary">view more</a>
                        </div>
                    </div>

            ))}
            </div>
        </>
    );
}