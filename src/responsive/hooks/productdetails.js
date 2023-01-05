import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
//import StarRatings from "react-star-ratings";
export default function Productdetails()
{
    const[product,setProduct]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(info=>info.json())
        .then(data=>setProduct(data))

    },[])
    return(
        <>
        <div className="container pt-5">
        <div className="row">
            <div className="col-lg-6">
                <img src={product.image} className="container" height="500" width="500"/>
            </div>
            <div className="col-lg-6 shadow">
                <h1>{product.title}</h1>
                <h3 className="text-secondary">{product.category}</h3>
                <h5 className="text-info">{product.description}</h5>
                <h2><b>${product.price}</b></h2>
                {/* <StarRatings rating={product.rating.rate} starRatedColor="gold" starDimension="20px"/> */}
                <button className="btn btn-primary m-3">Buy now</button>
                <button className="btn btn-warning m-3">Add to cart</button>
                <button className="btn btn-danger m-3">Add to Favourite</button>
            </div>
        </div>
        </div>
        </>
    );
}