import React,{Component} from "react";
import SearchForm from "../SearchForm";
import SearchResult from "../SearchResult";
import API from "../../utils/API";


class Searchbooks extends Component{



    state={
        search:"",
        result:[],
        error:""
    };

    handleInputChange= (event)=>{

        const {name,value} = event.target;
        this.setState({[name]:value});
    };

    handleSearchFormSubmit =(event)=>{

        event.preventDefault();
        
        API.getGoogleBooks(this.state.search);
    };

render(){
    return(
        <div>
            search page
            <SearchForm handleInputChange={this.handleInputChange}
                        handleSearchFormSubmit={this.handleSearchFormSubmit}
                    search={this.state.search}/>
            <SearchResult />

        </div>

    );
}

};

export default Searchbooks;