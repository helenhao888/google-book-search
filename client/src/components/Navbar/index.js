import React from "react";
import {Link} from "react-router-dom";
import "./style.css"


function Navbar() {


  return (
                     
    //   <nav className="navbar sticky-top ">
    //           <a class="navbar-brand" href="/">
    //            Google Books  </a>
           

        //   <Link className="navbar-nav" to="/search">              
        //       <i className="fa fa-search" aria-hidden="true">  Search</i>                   
        //   </Link>    
          
        //   <Link className="navbar-nav" to="/save">
        //       <i className="fa fa-bookmark" aria-hidden="true">  Saved</i>                    
        //   </Link>          

    //   </nav>

      <nav class="navbar navbar-expand-lg  sticky-top">

          <Link className="navbar-brand" to="/">
              Google Books
          </Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <Link className="nav-item" to="/search">
                      <i className="fa fa-search" aria-hidden="true">  Search</i>
                  </Link>

                  <Link className="nav-item" to="/save">
                      <i className="fa fa-bookmark" aria-hidden="true">  Saved</i>
                  </Link>
                  
              </div>
          </div>
      </nav>
  );
}

export default Navbar;
