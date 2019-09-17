const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//call google books API to get books
router.route("/googlebooks/:title")
      .get(booksController.getGoogleBooks);



// return all saved books as JSON.      
router.route("/")      
      .get(booksController.findAll);

//save a new book to the database.
router.route("/")
      .post(booksController.create);
      
//view a book from the database by Mongo `_id`.
router.route("/:id")
      .get(booksController.findById);

//delete a book from the database by Mongo `_id`.
router.route("/:id")      
      .delete(booksController.remove);

module.exports = router;      