const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    ISBN: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    publishedYear: Number,
    publisher: String
});

module.exports = mongoose.model('Book', bookSchema);
