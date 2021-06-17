const mongoose = require("mongoose");
const schema = mongoose.schema;

const bookSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  authors: {
    type: [String],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
