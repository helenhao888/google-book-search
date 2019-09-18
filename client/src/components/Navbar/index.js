import React from "react";
import {Link} from "react-router-dom";
import "./style.css"


function Navbar() {


  return (
                     
   
      <nav class="navbar navbar-expand-lg  sticky-top">

          <Link className="navbar-brand" to="/">
              Google Books
          </Link>

         
          <div class="navbar" >
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
