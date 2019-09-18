import React from 'react'
import "./style.css";
import {List, ListItem} from "../List";

function SearchResult(props) {
    
    

    return (
        <div className="container-fluid resultContainer">
            <List>
                <h2>Results</h2>

                {props.result.map((book, index) => (
                   book.volumeInfo.title && book.volumeInfo.title ?                   
                   (<ListItem key={index}>
                        <div className="card mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} className="card-img" alt="book image" />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                                        <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                                        <p className="card-text">{book.volumeInfo.description}</p>
                                        <button><a href={book.volumeInfo.previewLink} target="_blank">View</a></button>
                                    
                                        <button  onClick={props.handleSaveBooks} 
                                                title={book.volumeInfo.title} authors={book.volumeInfo.authors}
                                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                                link={book.volumeInfo.previewLink}
                                                description={book.volumeInfo.description}
                                                >Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ListItem>
                   ) :
                   <div></div>   

                ))}
            </List>
        </div>
    )
}

export default SearchResult;


