const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const loginSchema = new Schema({
    username: { type: String, required: true },
    password: { type: [String], required: true }
  });
  const Book = mongoose.model("Book", bookSchema);
  module.exports = Book;