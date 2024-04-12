const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shop-app')
    .then(() => {
        console.log('MongoDB is connected.');
    }).catch((err) => {
        console.log('Error:', err); // Log error if connection fails
    });

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

personSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
})

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    firstName: 'Mochammad',
    lastName: 'Gamal'
});
console.log(person.fullName);