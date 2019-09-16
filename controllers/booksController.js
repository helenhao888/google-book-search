const db = require("../models");
const axios =require("axios");

//define methods for booksController

module.exports = {

    getGoogleBooks: (req,res) => {
      console.log("title ",req.params.title);
      axios
          .get("https://www.googleapis.com/books/v1/volumes?q="+req.params.title)
          .then(response=>res.json(response.data.items))
          .catch(err => console.log(err));
    },

    findAll: (req,res) => {
      console.log("find all");
        db.Book
          .find(req.query)
          .sort({author:1})
          .then( dbModel => res.status(200).jscon(dbModel))
          .catch( err => res.status(422).json(err));
    },
    findById: (req,res) => {
        db.Book
          .findById( req.params.id)
          .then(dbModel => res.status(200).json(dbModel))
          .catch( err => res.status(422).json(err));
    },

    create: (req,res) =>{
        db.Book
          .create(req.body)
          .then(dbModel => res.status(200).json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    remove: (req,res) => {
        db.Book
          .findById({_id: req.params.id})
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.status(200).json(dbModel))
          .catch(err => res.status(422).json(err));
    }
};