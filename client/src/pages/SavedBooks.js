import React,{Component} from "react";
import API from "../utils/API";
import "./style.css";
import SavedBooksList from "../components/SavedBooksList";





class SavedBooks extends Component{

    state={
        books:[],
        error:""
    };

    componentWillMount=()=>{
        this.getBooks();
    }
    getBooks =()=>{

        API.getBooks()
           .then(res=>{         

                console.log("success", res);
                this.setState({books:res.data});
                console.log("state books",this.state.books);
            })
            .catch(err =>{
                console.log("get books err ", err);
            })

    }
   

    handleDeleteBooks=(event)=>{

       console.log("delete",event.target.id);
        
        API.deleteBooks(event.target.id)
        .then(res=>{         

            console.log("success", res);
            this.getBooks();
            
        })
        .catch(err =>{
            console.log("delete books err ", err);
        })
        
    }

render(){
    return(
        <div className="container-fluid">

         
            <SavedBooksList getBooks={this.getBooks}
                            books={this.state.books}
                            handleDeleteBooks={this.handleDeleteBooks} />
         

        </div>

    );
}

};


export default SavedBooks;
