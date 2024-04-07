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

// ! temporary comment
// const movie = new Movie({
//     title: 'Black Phanter',
//     year: 2018,
//     score: 7.3,
//     director: "Ryan Coogler"
// });
// movie.save();

const movie = [
    {
        title: 'Naruto',
        year: 1998,
        score: 9.3,
        director: "Kasashikisimoto"
    },
    {
        title: 'Bleach',
        year: 1998,
        score: 6.3,
        director: "Hehe Ga Apal"
    },
    {
        title: 'One Piece',
        year: 1990,
        score: 10.0,
        director: "Oda"
    },
];

Movie.insertMany(movie)
    .then((result) => {
        console.log('Movies batch has successfully saved!');
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });