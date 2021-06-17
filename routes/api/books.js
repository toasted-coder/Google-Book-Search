const router = require("express").Router();
const bookControl = require("../../controllers/bookControl");

// Matches with "/api/books"
router.route("/").get(bookControl.findAll).post(bookControl.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookControl.findById)
  .put(bookControl.update)
  .delete(bookControl.remove);

module.exports = router;
