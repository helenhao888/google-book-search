import React from "react";
import "./style.css";

function SearchForm(props){

    return(
        <div className="contianer">
            <h2>Book Search</h2>
            <form className="search">
                <label htmlFor="bookname">Book Name</label>
                <input id="bookname" onChange={props.handleInputChange}
                       name="bookname" value={props.search}
                       className="form-control">
                </input>
            </form>
            <button type="submit" onClick={props.handleSearchFormSubmit}>Submit</button>

        </div>
    )
};

export default SearchForm;

