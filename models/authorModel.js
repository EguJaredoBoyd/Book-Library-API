import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthYear: { type: Number, required: true },
    nationality: { type: String },
    booksWritten: { type: Number, default: 0 },
    email: { type: String, required: true },
    website: { type: String },
    alive: { type: Boolean, default: true }
});

export default mongoose.model("Author", authorSchema);
