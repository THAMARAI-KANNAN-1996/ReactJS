import React from "react";
import '../hooks/sassdemo.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import img1 from '../../images/sass1.jpg'
import img2 from '../../images/sass3.jpg'
import img3 from '../../images/sass2.jpg'
import img4 from '../../images/sass4.jpeg'
import img5 from '../../images/sass5.jpeg'
import img6 from '../../images/sass6.jpeg'

export default function Sassdemo()
{
    return(
        <>
<div className="container sassbg">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">GM Real Estate</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Service</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
        </nav>

<div className="container p-5">
        <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Andhra Pradesh</option>
                        <option>Karnataka</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
</div>
    <div className="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100 h-100" src={img1} alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 h-100" src={img2} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 h-100" src={img3} alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>

    <div className="p-5">
                <div class="card-columns">
            <div class="card">
                <img class="card-img-top" src={img4} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Real Estate Investor</h5>
                <p class="card-text">Becoming a real estate investor is the most rewarding career in real estate! Real estate investors are those who buy properties or land, try to maximize their profits, and then sell their investment</p>
                </div>
            </div>
            <div class="card p-3">
                <blockquote class="blockquote mb-0 card-body">
                <p>A real estate loan officer helps clients with obtaining a loan to buy a property. Meaning, they collaborate with buyers to finance their purchase within their budget</p>
                <footer class="blockquote-footer">
                    <small class="text-muted">
                    Someone famous in <cite title="Source Title">New york times</cite>
                    </small>
                </footer>
                </blockquote>
            </div>
            <div class="card">
                <img class="card-img-top" src={img5} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Real estate inspector</h5>
                <p class="card-text">A real estate inspector examines real estate properties for any defects or issues that will cause problems for the buyer, seller, or agent</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card bg-dark text-white text-center p-3">
                <blockquote class="blockquote mb-0">
                <p>Our award-winning team of property specialists will help take care of everything. A simple 3 step process will get you on track.</p>
                <footer class="blockquote-footer">
                    <small>
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </div>
            <div class="card text-center">
                <div class="card-body">
                <h5 class="card-title">Real Estate Appraiser</h5>
                <p class="card-text">Appraisers are professionals who determine the value of commercial or residential real estate.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img" src={img6} alt="Card image"/>
            </div>
            <div class="card p-3 text-right">
                <blockquote class="blockquote mb-0">
                <p>Real estate marketing specialists are professionals who execute the marketing duties for real estate agents and brokers.</p>
                <footer class="blockquote-footer">
                    <small class="text-muted">
                    Someone famous in <cite title="Source Title">Wall Street journal</cite>
                    </small>
                </footer>
                </blockquote>
            </div>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Real Estate agents</h5>
                <p class="card-text">Real estate agents help people sell or buy properties.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
                </div>

</div>
        </>
    );
}