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
});

personSchema.pre('save', async function() {
    this.firstName = 'Afifa';
    this.lastName = 'Aulia';
    console.log('Saving process...');
});

personSchema.post('save', async function() {
    console.log('Data has been successfully.');
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    firstName: 'One',
    lastName: 'Person'
});
console.log(person);

person.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})