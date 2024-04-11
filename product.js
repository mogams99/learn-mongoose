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
        min: [0, 'Nilai tidak boleh kurang dari nol.']
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: [String],
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
        min: [0, 'Nilai tidak boleh kurang dari nol.']
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

const tshirt = new Product({
    "name": "Kemeja Flanel",
    "brand": "Hollister",
    "price": 750000,
    "color": "biru muda",
    "size": ["S", "M", "L"],
    "description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
    "condition": "baru",
    "stock": 25,
    "availability": {
        "online": true,
        "offline": true
    }
});

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

Product.findByIdAndUpdate('6617af73164d9bc07857c353', {
    "price": 150000,
    "stock": -7,
}, {new: true, runValidators: true}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err.errors.stock.properties.message);
})