const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new book
router.post('/books', async (req, res) => {
    const newBook = new Book(req.body);
    try {
        const book = await newBook.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a book by ID
router.put('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            {
                ISBN: req.body.ISBN,
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                publishedYear: req.body.publishedYear,
                publisher: req.body.publisher
            },
            { new: true }
        );
        res.json(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete a book by ID
router.delete('/books/:id', async (req, res) => {
    try {
        await Book.findByIdAndRemove(req.params.id);
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
