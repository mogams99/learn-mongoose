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

// const movie = new Movie({
//     title: 'Black Phanter',
//     year: 2018,
//     score: 7.3,
//     director: "Ryan Coogler"
// });
// movie.save();

// const movie = [
//     {
//         title: 'Naruto',
//         year: 1998,
//         score: 9.3,
//         director: "Kasashikisimoto"
//     },
//     {
//         title: 'Bleach',
//         year: 1998,
//         score: 6.3,
//         director: "Hehe Ga Apal"
//     },
//     {
//         title: 'One Piece',
//         year: 1990,
//         score: 10.0,
//         director: "Oda"
//     },
// ];

// Movie.insertMany(movie)
//     .then((result) => {
//         console.log('Movies batch has successfully saved!');
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.findById('6612a21a4fbd14eb00986d70')
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.find()
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.updateOne({title: 'Bleach'}, {score: 9.0})
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.updateMany({year: {$lt: 2018}}, {score: 7.9})
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.findByIdAndUpdate('6612a21a4fbd14eb00986d6e', { score: 9.1 }, { new: true })
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.deleteOne({title: 'Bleach'})
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.deleteMany()
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Movie.findByIdAndDelete('6612a21a4fbd14eb00986d6e')
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });