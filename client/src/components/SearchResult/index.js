import React from 'react'
import "./style.css";
import {List, ListItem} from "../List";

function SearchResult(props) {
    
    

    return (
        <div className="container-fluid resultContainer">
            <List>
                <h4>Results</h4>

                {props.result.map((book, index) => (
                   book.volumeInfo.title && book.volumeInfo.title ?                   
                   (<ListItem key={index}>
                        <div className="card mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                                    <img src={book.volumeInfo.imageLinks?
                                               book.volumeInfo.imageLinks.smallThumbnail:
                                               ""}
                                         className="card-img" alt="book image" />
                                   
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text card-desc">
                                               {book.volumeInfo.description? 
                                                    book.volumeInfo.description:
                                                    "No description"
                                                 }
                                               </p>
                                        <button><a href={book.volumeInfo.previewLink} target="_blank">View</a></button>
                                    
                                        <button  onClick={props.handleSaveBooks} 
                                                title={book.volumeInfo.title} authors={book.volumeInfo.authors}
                                                image={book.volumeInfo.imageLinks?
                                                        book.volumeInfo.imageLinks.smallThumbnail:
                                                        ""}
                                                link={book.volumeInfo.previewLink}
                                                description={book.volumeInfo.description}
                                                disabled=
                                                {props.saveSuccess ?
                                                   true:
                                                    false}
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


