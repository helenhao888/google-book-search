import React,{Component} from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import "./style.css";
import SearchResult from "../components/SearchResult";


class Searchbooks extends Component{

    state={
        bookname:"",
        result:[],
        errorflag:false,
        error:"",
        loadingflag:false,
        displayflag:false
    };

    handleInputChange = (event) => {


        const { name, value } = event.target;

        this.setState({ [name]: value });

    };

    handleSearchFormSubmit = (event) => {

        event.preventDefault();
        this.setState({
            errorflag: false,
            error: ""
        });
        this.setState({ loadingflag: true });

        if (this.state.bookname === "") {
            this.setState({
                errorflag: true,
                error: "Please input a valid book name!"
            })
        } else {
            API.getGoogleBooks(this.state.bookname)
                .then(res => {

                    this.setState({
                        result: res.data,
                        loadingflag: false,
                        displayflag: true
                    });

                })
                .catch(err => {
                    console.log("get google books err ", err);
                })
        }
    };

    handleSaveBooks=(event)=>{
        
        const authorArr = event.target.attributes['authors'].value.split(",");
        
        const bookData = {
            title: event.target.attributes['title'].value,
            authors: authorArr,
            image: event.target.attributes['image'] ? event.target.attributes['image'].value:"" ,
            link : event.target.attributes['link'] ? event.target.attributes['link'].value: "",
            description: event.target.attributes['description'] ? event.target.attributes['description'].value:""
        }
        
        API.saveBooks(bookData)
        .then(res=>{         

            console.log("success", res);
            API.getBooks()
               .then(res=>{
                  console.log("get book successfully",res);
                } )
               .catch(err =>
                  console.log("get book err",err));  
            
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
                error={this.state.error}
            />


            {this.state.loadingflag && ! this.state.errorflag?
                (
                    <p>Loading....</p>

                )
                :
                <p></p>}

            
            {this.state.result.length !==0 ? (

                <SearchResult result={this.state.result} 
                              handleSaveBooks={this.handleSaveBooks} />
                )
                : ( 
                    this.state.displayflag ?
                    <h4>No Result to Display</h4>
                    :
                    <div></div>
                )}

        </div>

    );
}

};
export default Searchbooks;