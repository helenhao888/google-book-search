import React from "react";
import "./style.css";

function SearchForm(props){

    return(
        <div className="contianer searchForm">
            <h2>Book Search</h2>
            <form className="search">
                <label htmlFor="bookname">Book Name</label>
                <input id="bookname" onChange={props.handleInputChange}
                       name="bookname" value={props.bookname}   
                       placeholder="input the book name"                    
                       className="form-control">
                </input>
            </form>
            
            <button type="submit"  className="btn btn-primary"
                    onClick={props.handleSearchFormSubmit}>Search</button>

        </div>
    )
};

export default SearchForm;

