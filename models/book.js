var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    ISBN: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports=mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

// Get Book id
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

// Add Books
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}

// update Books
module.exports.updateBook = function(id, book, options, callback) {
    var query   = { 
        _id: id 
    };
    var update  = {
        title: book.title,
        gesres: book.gesres,
        description: book.description,
        author: book.author,
        Publisher: book.Publisher,
        pases: book.pases,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// delete Books
module.exports.deleteBook = function(id, callback) {
    var query   = { _id: id };
    Book.remove(query, callback);
}