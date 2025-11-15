import Author from "../models/authorModel.js";

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching authors", error });
    }
};

export const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ message: "Author not found" });
        res.json(author);
    } catch (error) {
        res.status(500).json({ message: "Error fetching author", error });
    }
};

export const createAuthor = async (req, res) => {
    try {
        const newAuthor = new Author(req.body);
        const savedAuthor = await newAuthor.save();
        res.status(201).json(savedAuthor);
    } catch (error) {
        res.status(400).json({ message: "Error creating author", error });
    }
};

export const updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAuthor) return res.status(404).json({ message: "Author not found" });
        res.json(updatedAuthor);
    } catch (error) {
        res.status(400).json({ message: "Error updating author", error });
    }
};

export const deleteAuthor = async (req, res) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
        if (!deletedAuthor) return res.status(404).json({ message: "Author not found" });
        res.json({ message: "Author deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting author", error });
    }
};
