import React from "react";
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function Menu()
{
    return(
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 className="text-success">React Task</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav1">
    <ul class="navbar-nav">
  
      <li class="nav-item active">
      <Link to='/hello' className="ml-3">Hello</Link>
      </li>
      <li class="nav-item active">
      <Link to='/congratscard' className="ml-3">Congrats Card</Link>
      </li>
      <li class="nav-item active">
      <Link to='/superover' className="ml-3">Super over</Link>
      </li>
      <li class="nav-item active">
      <Link to='/login' className="ml-3">Login</Link>
      </li>
      <li class="nav-item active">
      <Link to='/notify' className="ml-3">Notification</Link>
      </li>
      <li class="nav-item active">
      <Link to='/social' className="ml-3">Social button</Link>
      </li>
      <li class="nav-item active">
      <Link to='/technology' className="ml-2">Technology card</Link>
      </li>
      <li class="nav-item active">
      <Link to='/portfolio' className="ml-2">Portfolio</Link>
      </li>
      <li class="nav-item active">
      <Link to='/feedback' className="ml-2">Feedback</Link>
      </li>
      <li class="nav-item active">
      <Link to='/increment' className="ml-2">Increment</Link>
      </li>
      <li class="nav-item active">
      <Link to='/fruitscounter' className="ml-2">Fruitscounter</Link>
      </li>
      <li class="nav-item active">
      <Link to='/frontend' className="ml-2">Frontend</Link>
      </li>
      <li class="nav-item active">
      <Link to='/date' className="ml-2">Date</Link>
      </li>
      <li class="nav-item active">
      <Link to='/fakestore' className="ml-2">Fakestore</Link>
      </li>
      <li class="nav-item active">
      <Link to='/table' className="ml-2">table</Link>
      </li>
      <li class="nav-item active">
      <Link to='/sassdemo' className="ml-2">Sassdemo</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
}
export default Menu;
