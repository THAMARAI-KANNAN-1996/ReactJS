import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './works.css';
import img1 from '../images/works1.jpeg'
import img2 from '../images/works3.jpeg'
import img3 from '../images/works2.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faCow } from "@fortawesome/free-solid-svg-icons";
import { faTractor } from "@fortawesome/free-solid-svg-icons";
function Works()
{
    return(
        <>
<div className="container-fluid bg-success">
  <h1 className="text-center">HOW IT WORKS</h1>
  <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores minus iusto dicta, dolores impedit soluta libero labore accusantium expedita quidem obcaecati similique minima cum illum aperiam est alias enim</p>

    <div>
      <div className="card-deck">
        <div className="card m-2">
          <img className="card-img-top" src={img1} alt="Card image cap"/>
        </div>
<div className="card text-center m-2">
<div className="card-body">
<FontAwesomeIcon icon={faLeaf} className="text-success workssiz p-5"/>
<h5 className="card-title">Organic Farming</h5>
<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores minus iusto dicta, dolores impedit soluta libero labore accusantium expedita quidem obcaecati similique minima cum illum aperiam est alias enim</p>
</div>
    
</div>
<div className="card m-2">
<img className="card-img-top" src={img2} alt="Card image cap"/>
    
</div>
      </div>
    </div>


<div className="card-deck">
<div className="card text-center m-2">
<FontAwesomeIcon icon={faCow} className="text-success workssiz p-5"/>
<div className="card-body">
<h5 className="card-title">Animal Husbandary</h5>
<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores minus iusto dicta, dolores impedit soluta libero labore accusantium expedita quidem obcaecati similique minima cum illum aperiam est alias enim</p>
</div>
    
</div>
<div className="card m-2">
<img className="card-img-top" src={img3} alt="Card image cap"/>
    
    
</div>
<div className="card m-2 text-center">
<FontAwesomeIcon icon={faTractor} className="text-success workssiz p-5"/>
<div className="card-body">
<h5 className="card-title">Arable Farming</h5>
<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores minus iusto dicta, dolores impedit soluta libero labore accusantium expedita quidem obcaecati similique minima cum illum aperiam est alias enim</p>
</div>
    
</div>
</div>
</div>
        <hr/>
        </>
    );
}
export default Works;