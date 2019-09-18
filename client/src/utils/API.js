import axios from "axios";

export default {

    getGoogleBooks: (title) =>{
       console.log("in API, title",title);
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