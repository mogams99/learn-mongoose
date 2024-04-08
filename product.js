const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shop-app')
    .then(() => {
        console.log('MongoDB is connected.');
    }).catch((err) => {
        console.log('Error:', err); // Log error if connection fails
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
});

const Product = mongoose.model('Product', productSchema);
// const tshirt = new Product({name: 'Goolagool Shirt V3', price: 200000, color: 'acid'});
// tshirt.save()
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// Product.find().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

// Product.deleteMany().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })