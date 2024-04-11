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
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 150
    },
    condition: {
        type: String,
        enum: ['baru', 'bekas'],
        required: true,
        default: 'baru'
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    availability: {
        online: {
            type: Boolean,
            required: true
        },
        offline: {
            type: Boolean,
            required: true
        }
    }
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