import React from "react";
import {List, ListItem} from "../List";

function SavedBooksList(props){

    return(
      <div className="container-fluid savedContainer">
      <List>
                   
             {props.books.map(book => 
              
              <ListItem key={book._id}>
                 <div className="card mb-3" >
                   <div className="row no-gutters">
                     <div className="col-md-4">
                       <h5 className="card-title">{book.title}</h5>
                       <p className="card-text"><small className="text-muted">{book.authors}</small></p>

                       <img src={book.image} className="card-img" alt="book" />
                     </div>
                     <div className="col-md-8">
                       <div className="card-body">
                         <p className="card-text card-desc">{book.description}</p>
                         <button><a href={book.link} target="_blank" rel="noopener noreferrer">View</a></button>

                         <button onClick={props.handleDeleteBooks}
                           id={book._id}>Delete</button>
                       </div>
                     </div>
                   </div>
                 </div>
              </ListItem>)}
              

          
      </List>
  </div>
    )
};

export default SavedBooksList;