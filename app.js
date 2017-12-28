var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

var Genre = require('./models/genre');
var Book = require('./models/book');
var Author = require('./models/author');

// connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore', {
    useMongoClient: true
});
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genres');
});



// genres zone
app.get('/api/genres', function(req, res) {
    Genre.getGenres(function(err, genres){
        if(err) throw err;
        res.json(genres);
    })
});

app.get('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    Genre.getGenreById(id, function(err, genre) {
        if(err) throw err;
        res.json(genre)
    })
});

app.post('/api/genres', function(req, res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre) {
        if(err) throw err;
        res.json(genre);
    })
});

app.put('/api/genres/:_id', function(req, res){
    var id      = req.params._id;
    var genre   = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre) {
        if(err) throw err;
        res.json(genre);
    })
});

app.delete('/api/genres/:_id', function(req, res){
    var id      = req.params._id;
    Genre.deleteGenre(id, function(err, genre) {
        if(err) throw err;
        res.json(genre);
    })
});



// book zone
app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books){
        if(err) throw err;
        res.json(books);
    })
});

app.get('/api/books/:_id', function(req, res) {
    var params = req.params._id;
    Book.getBookById(params, function(err, book){
        if(err) throw err;
        res.json(book);
    })
});

app.post('/api/books', function(req, res) {
    var book = req.body;
    Book.addBook(book, function(err, book){
        if(err) throw err;
        res.json(book);
    })
});

app.put('/api/books/:_id', function(req, res){
    var id      = req.params._id;
    var book    = req.body;
    Book.updateBook(id, book, {}, function(err, book) {
        if(err) throw err;
        res.json(book);
    })
});

app.delete('/api/books/:_id', function(req, res){
    var id      = req.params._id;
    Book.deleteBook(id, function(err, book) {
        if(err) throw err;
        res.json(book);
    })
});

// Author zone
app.get('/api/authors', function(req, res) {
    Author.getAuthors(function(err, books){
        if(err) throw err;
        res.json(books);
    })
});

app.get('/api/authors/:_id', function(req, res) {
    var params = req.params._id;
    Author.getAuthorById(params, function(err, book){
        if(err) throw err;
        res.json(book);
    })
});

app.post('/api/authors', function(req, res) {
    var book = req.body;
    Author.addAuthor(book, function(err, book){
        if(err) throw err;
        res.json(book);
    })
});

app.put('/api/authors/:_id', function(req, res){
    var id      = req.params._id;
    var book    = req.body;
    Author.updateAuthor(id, book, {}, function(err, book) {
        if(err) throw err;
        res.json(book);
    })
});

app.delete('/api/authors/:_id', function(req, res){
    var id      = req.params._id;
    Author.deleteAuthor(id, function(err, book) {
        if(err) throw err;
        res.json(book);
    })
});

app.listen(3000);
console.log('Running on port 3000...');