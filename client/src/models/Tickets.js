const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: { type: String, required: true },
    contact: { type: [String], required: true },
    manager: { type: String, required: true },
    description: { type: String, required: true },
    receiver: { type: String, required: true },
  });
  
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;