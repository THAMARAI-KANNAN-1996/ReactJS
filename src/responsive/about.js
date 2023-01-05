import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './about.css';
import img1 from '../images/about1.jpeg';
import img2 from '../images/about2.jpeg';
import img3 from '../images/about3.jpeg'; 
import img4 from '../images/about4.jpeg';
function About()
{
    return(
        <>

        <div className="container-fluid bg-success aboutbg">
            <h1 className="text-center">About Our Farm</h1>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla id deserunt possimus sed omnis explicabo sequi commodi voluptates animi vero, incidunt quod veniam, aperiam cum nobis labore cumque eveniet velit!</p>   
        <div className="col-lg-12">
        <div className="card-group">
      <div className="card m-1">
    
        <div className="card-body">
          <h5 className="card-title">Vegetables</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <img className="card-img-bottom container" src={img1} alt="Card image cap"/>
      </div>
      <div className="card m-1">
    
    <div className="card-body">
      <h5 className="card-title">How It Works</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
    <img className="card-img-bottom container" src={img2} alt="Card image cap"/>
  </div>
  <div className="card m-1">
    
    <div className="card-body">
      <h5 className="card-title">Flexibility</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
    </div>
    <img className="card-img-bottom container" src={img3} alt="Card image cap"/>
  </div>
  <div className="card m-1">
    
    <div className="card-body">
      <h5 className="card-title">Farm Products</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
    <img className="card-img-bottom container" src={img4} alt="Card image cap"/>
  </div>
</div>

        </div>
        
        </div>
        <hr/>
        </>
    );
}
export default About;