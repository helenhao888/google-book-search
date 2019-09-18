import axios from "axios";

export default {

    getGoogleBooks: (title) =>{
        
       return axios.get("/api/books/googlebooks/"+title);
            
    },

    saveBooks : (data) =>{
        return axios.post("/api/books",data);
    },

    getBooks : () => {
        return axios.get("/api/books");
    },

    deleteBooks :(id) => {
        return axios.delete("/api/books/"+id);
    }
 
};