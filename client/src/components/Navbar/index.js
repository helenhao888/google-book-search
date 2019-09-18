import React from "react";
import {Link} from "react-router-dom";
import "./style.css"


function Navbar() {


  return (
                     
      <nav className="navbar sticky-top ">
          <Link className="navbar-nav" to="/">
              <button type="button" className="link-button">
                  Google Books
                    </button>
          </Link>     

          <Link className="navbar-nav" to="/search">
              <button type="button" className="link-button">
              <i className="fa fa-search" aria-hidden="true">  Search</i>
                    </button>
          </Link>    
          
          <Link className="navbar-nav" to="/save">
              <button type="button" className="link-button">
              <i className="fa fa-bookmark" aria-hidden="true">  Saved</i>
                    </button>
          </Link>  

         

      </nav>
  );
}

export default Navbar;