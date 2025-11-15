import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    pages: { type: Number, min: 1 },
    isbn: { type: String, unique: true, required: true },
    language: { type: String, default: "English" }
});

export default mongoose.model("Book", bookSchema);
