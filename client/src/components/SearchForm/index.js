import React from "react";
import "./style.css";

const styles = {
      errorStyles: {
      color: "red",
      fontWeight: 20
    }
  };

function SearchForm(props){

    return(
        <div className="contianer searchForm">
            <h2>Book Search</h2>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control  mr-sm-2" type="search"
                        id="bookname" onChange={props.handleInputChange}
                        name="bookname" value={props.bookname}
                        placeholder="input a book name" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0"
                        onClick={props.handleSearchFormSubmit} type="submit">Search</button>
                </form>
                {props.error ?
                   <div style={styles.errorStyles}>{props.error}</div>:
                   <div></div>
                }   
            </nav>


        </div>
    )
};

export default SearchForm;

