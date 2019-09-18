import axios from "axios";

export default {

    getGoogleBooks: (title) =>{
        
       console.log("get google book title",title);
       return axios.get("/api/books/googlebooks/"+title);
            
    },

    saveBooks : (data) =>{
        console.log("api data",data);
        return axios.post("/api/books",data);
    },

    getBooks : () => {
        console.log("get books");
        return axios.get("/api/books");
    }
 
};