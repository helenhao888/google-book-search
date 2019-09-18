import React from "react";
import {Link} from "react-router-dom";
import "./style.css"


function Navbar() {


  return (
                     
   

    //   <nav class="navbar navbar-expand-lg  sticky-top">

    //       <Link className="navbar-brand" to="/">
    //           Google Books
    //       </Link>

    //       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //           <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //           <div class="navbar-nav">
    //               <Link className="nav-item" to="/search">
    //                   <i className="fa fa-search" aria-hidden="true">  Search</i>
    //               </Link>

    //               <Link className="nav-item" to="/save">
    //                   <i className="fa fa-bookmark" aria-hidden="true">  Saved</i>
    //               </Link>
                  
    //           </div>
    //       </div>
    //   </nav>
<section role="navigation">
<nav class="navbar navbar-expand-lg  navbar-inverse bg-inverse navbar-light bg-light">
{/* <a class="navbar-brand" href="#">Navbar</a> */}
 <Link className="navbar-brand" to="/">
               Google Books
           </Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
  {/* <Link className="nav-item" to="/search">
                       <i className="fa fa-search" aria-hidden="true">  Search</i>
                  </Link> */}
    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
    <a class="nav-item nav-link" href="#">Features</a>
    <a class="nav-item nav-link" href="#">Pricing</a>
    <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </div>
</div>
</nav>
</section>
  );
}

export default Navbar;
