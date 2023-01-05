import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import img1 from '../images/product1.jpeg';
import img2 from '../images/product2.jpeg';
import img3 from '../images/product3.jpeg';

function Products()
{
    return(
        <>
        <hr/>
        <div className="container-fluid bg-info p-5">
            <div className="row justify-content-center">

            <div className="card-deck container">
            <div className="card shadow">
    
     <img className="card-img-top rounded-circle" src={img1} alt="Card image cap"/>
    
    <div className="card-body text-center">
      <h5 className="card-title">Fresh Fruits</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button className="btn">Learn More</button>
    </div>
  </div>
  <div className="card text-center shadow">
    <img className="card-img-top rounded-circle" src={img2} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Fresh Vegetables</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <button className="btn">Learn More</button>
    </div>
  </div>
  <div className="card text-center shadow">
    <img className="card-img-top rounded-circle" src={img3} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Vegetables and Fruit Salads</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button className="btn">Learn More</button>
    </div>
  </div>
</div>

            </div>
        </div>
        <hr/>
        </>
    );
}
export default Products;