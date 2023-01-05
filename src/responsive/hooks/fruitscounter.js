import React,{useState} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import img1 from '../../images/mango3.jpg';
import img2 from '../../images/banana3.jpg';
function Fruitscounter()
{
    const[increment,setIncrement]=useState(0);
    const[increment1,setIncrement1]=useState(0);
   return(
    <>
    <div className="container bg-warning p-5">
        <div className="bg-white p-5">
            <div className="col-lg-12">
            <h1 className="col-lg-12 text-center">Bob ate {increment} Mangoes {increment1} Bananas</h1>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img src={img1} className="col-lg-12 pb-3"/>
                    <input type="button" onClick={()=>setIncrement(increment+1)} value="Eat Mango" className="col-lg-12 btn-success btn" height="500"/>
                    

                </div>
                <div className="col-lg-6">
                <img src={img2} className="col-lg-12"/>
                <input type="button" onClick={()=>setIncrement1(increment1+1)} value="Eat Banana" className="col-lg-12 btn-success btn"/>
                </div>

            </div>


        </div>

    </div>
    </>
   ); 
}
export default Fruitscounter;
