import React,{Component} from "react";
import SearchForm from "../SearchForm";
import API from "../../utils/API";
import {List, ListItem} from "../List";
import { Col, Row, Container }  from "../Grid";
import Jumbotron from "../Jumbotron";
import { Link } from "react-router-dom";
import "./style.css";



class Searchbooks extends Component{

    state={
        bookname:"",
        result:[],
        error:""
    };

    handleInputChange= (event)=>{

        const {name,value} = event.target;
        this.setState({[name]:value});
    };

    handleSearchFormSubmit =(event)=>{

        event.preventDefault();
        
        API.getGoogleBooks(this.state.bookname)
           .then(res=>{         

               this.setState({result:res.data});
               console.log("this state result",this.state.result);
               
           })
           .catch(err =>{
               console.log("get google books err ", err);
           })
    };

render(){
    return(
        <div className="container-fluid">

            <SearchForm handleInputChange={this.handleInputChange}
                handleSearchFormSubmit={this.handleSearchFormSubmit}
            />

            <Col size="md-10 col-md-offset-1 sm-12">

                {this.state.result ? (
                 
                    <List>
                     
                           <h1>Result</h1>
                      
                       
                        {this.state.result.map((book, index) => (
                            <ListItem key={index}>                               
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
                                                <a href={book.volumeInfo.previewLink} target="_blank">Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ListItem>

                        ))}
                    </List>
                 ) 
               : (
                        <h3>No Results to Display</h3>
                    )}
            </Col>




        </div>

    );
}

};
export default Searchbooks;