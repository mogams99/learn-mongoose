const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie-db')
    .then(() => {
        console.log('MongoDB is connected.');
    }).catch((err) => {
        console.log('Error:', err); // Log error if connection fails
    });