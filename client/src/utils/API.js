import axios from "axios";

export default {

    getGoogleBooks: (title) =>{
        
       console.log("get google book title",title);
       return axios.get("/api/books/googlebooks/"+title);
            
    }

};