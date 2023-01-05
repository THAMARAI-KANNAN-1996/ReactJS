import React from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
function Main()
{
    return(
        <>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 className="text-success">Organic Fresh</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
  
      <li class="nav-item active">
      <Link to='/home'  className="m-2">Home</Link>
      </li>
      <li class="nav-item active">
      <Link to='/about' className="m-2">About</Link>
      </li>
      <li class="nav-item active">
      <Link to='/works' className="m-2">Works</Link>
      </li>
      <li class="nav-item active">
      <Link to='/farm' className="m-2">Farm</Link>
      </li>
      <li class="nav-item active">
      <Link to='/animals' className="m-2">Animals</Link>
      </li>
      <li class="nav-item active">
      <Link to='/products' className="m-2">Products</Link>
      </li>
      <li class="nav-item active">
      <Link to='/testimonial' className="m-2">Testimonial</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
}
export default Main;