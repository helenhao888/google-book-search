import React from "react";
import {List, ListItem} from "../List";

function SavedBooksList(props){

    return(
      <div className="container-fluid savedContainer">
      <List>
          <h2>Results</h2>
          
         
             {props.books.map(book => 
              
              <ListItem key={book._id}>
                   <div className="card mb-3" >
                       <div className="row no-gutters">
                           <div className="col-md-3">
                               <img src={book.image} className="card-img" alt="book phot" />
                           </div>
                           <div className="col-md-9">
                               <div className="card-body">
                                   <h5 className="card-title">{book.title}</h5>
                                   <p className="card-text"><small className="text-muted">{book.authors}</small></p>
                                   <p className="card-text">{book.description}</p>
                                   <button><a href={book.previewLink} target="_blank">View</a></button>
                              
                                   <button  onClick={props.handleDeleteBooks}                                           
                                           id={book._id}
                                           >Delete</button>
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