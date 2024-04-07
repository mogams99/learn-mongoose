const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => {
        console.log('MongoDB is connected.');
    }).catch((err) => {
        console.log('Error:', err); // Log error if connection fails
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    director: String,
});

const Movie = mongoose.model('Movie', movieSchema);

const movie = new Movie({
    title: 'Black Phanter',
    year: 2018,
    score: 7.3,
    director: "Ryan Coogler"
});

movie.save();