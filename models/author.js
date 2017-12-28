var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String
    },
    date_of_death: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Author = module.exports=mongoose.model('Author', bookSchema);

// Get Author
module.exports.getAuthors = function(callback, limit) {
    Author.find(callback).limit(limit);
}

// Get Author id
module.exports.getAuthorById = function(id, callback) {
    Author.findById(id, callback);
}

// Add Author
module.exports.addAuthor = function(book, callback) {
    Author.create(book, callback);
}

// update Author
module.exports.updateAuthor = function(id, book, options, callback) {
    var query   = { 
        _id: id 
    };
    var update  = {
        first_name: book.first_name,
        family_name: book.family_name,
        date_of_birth: book.date_of_birth,
        date_of_death: book.date_of_death
    }
    Author.findOneAndUpdate(query, update, options, callback);
}

// delete Author
module.exports.deleteAuthor = function(id, callback) {
    var query   = { _id: id };
    Author.remove(query, callback);
}