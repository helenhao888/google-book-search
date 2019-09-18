import React,{Component} from "react";
import SearchForm from "../SearchForm";
import API from "../../utils/API";
import "./style.css";
import SearchResult from "../SearchResult";


class Searchbooks extends Component{

    state={
        bookname:"",
        result:[],
        error:"",
        loadingflag:false
    };

    handleInputChange= (event)=>{

        const {name,value} = event.target;
        this.setState({[name]:value});
    };

    handleSearchFormSubmit =(event)=>{

        event.preventDefault();
        this.setState({loadingflag:true});
        
        API.getGoogleBooks(this.state.bookname)
           .then(res=>{         

               this.setState({result:res.data,
                              loadingflag:false});
               
           })
           .catch(err =>{
               console.log("get google books err ", err);
           })
    };

    handleSaveBooks=(event)=>{

       
        const bookData = {
            title: event.target.attributes['title'].value,
            authors: event.target.attributes['authors'].value,
            image: event.target.attributes['image'] ? event.target.attributes['image'].value:"" ,
            link : event.target.attributes['link'] ? event.target.attributes['link'].value: "",
            description: event.target.attributes['description'] ? event.target.attributes['description']:""
        }
        console.log("bookDAta",bookData);
        API.saveBooks(bookData)
        .then(res=>{         

            console.log("success", res);
            
        })
        .catch(err =>{
            console.log("save books err ", err);
        })
        
    }

render(){
    return(
        <div className="container-fluid">

            <SearchForm handleInputChange={this.handleInputChange}
                handleSearchFormSubmit={this.handleSearchFormSubmit}
            />


            {this.state.loadingflag ?
                <p>Loading....</p>
                :
                <p></p>}

            {this.state.result ? (

                <SearchResult result={this.state.result} handleSaveBooks={this.handleSaveBooks}
                />
            )
                : (
                    <h3>No Results to Display</h3>
                )}

        </div>

    );
}

};
export default Searchbooks;