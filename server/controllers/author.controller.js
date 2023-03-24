const Author = require('../models/author.model');

module.exports = {
    
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    getAllAuthors: (req, res) => {
        Author.find({})
            .then(authors => res.json(authors))
            .catch(err => res.json(err))
    },

    getOneAuthor: (req, res) => {
        Author.findById(req.params._id)
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params._id, req.body, {new:true, runValidators:true})
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err))
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params._id)
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => console.log(err))
    }
// NOTE: .findByIdAndDelete returns the document that you deleted
}