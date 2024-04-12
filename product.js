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

productSchema.statics.closeStore = function() {
    return this.updateMany({}, {
        "stock": 0,
        "availability.online": false,
        "availability.offline": false,
    });
}

// productSchema.methods.outStock = function() {
//     this.stock = 0;
//     return this.save();
// }

const Product = mongoose.model('Product', productSchema);

// const changeStock = async(id) => {
//     const foundProduct = await Product.findById(id);
//     await foundProduct.outStock();
//     console.log('Berhasil diubah.');
// }

// changeStock('6617af73164d9bc07857c353');

// Product.closeStore()
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// const tshirt = new Product({
//     "name": "Kemeja Flanel",
//     "brand": "Hollister",
//     "price": 750000,
//     "color": "biru muda",
//     "size": ["S", "M", "L"],
//     "description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
//     "condition": "baru",
//     "stock": 25,
//     "availability": {
//         "online": true,
//         "offline": true
//     }
// });

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

// Product.findByIdAndUpdate('6617af73164d9bc07857c353', {
//     "price": 150000,
//     "stock": -7,
// }, {new: true, runValidators: true}).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err.errors.stock.properties.message);
// })

// Product.insertMany([
// 	{
// 		"name": "Kemeja Flanel",
// 		"brand": "Hollister",
// 		"price": 750000,
// 		"color": "biru muda",
// 		"size": ["S", "M", "L"],
// 		"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 25,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// 	},
// 	{
// 		"name": "Celana Chino",
// 		"brand": "Levi's",
// 		"price": 900000,
// 		"color": "krem",
// 		"size": ["28", "30", "32", "34", "36"],
// 		"description": "Celana chino dengan warna yang cerah dan desain yang simpel, terbuat dari bahan katun yang nyaman dipakai.",
// 		"condition": "baru",
// 		"stock": 15,
// 		"availability": {
// 			"online": true,
// 			"offline": false
// 		}
// 	},
// 	{
// 		"name": "Sweater",
// 		"brand": "Gap",
// 		"price": 650000,
// 		"color": "merah muda",
// 		"size": ["S", "M", "L"],
// 		"description": "Sweater berkualitas tinggi dengan warna yang cerah dan desain yang simpel, cocok untuk kegiatan sehari-hari.",
// 		"condition": "baru",
// 		"stock": 20,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// 	},
// 	{
// 		"name": "Sepatu Sneakers",
// 		"brand": "Nike",
// 		"price": 1200000,
// 		"color": "putih",
// 		"size": ["38", "39", "40", "41", "42"],
// 		"description": "Sepatu sneakers dengan desain yang sporty dan modern, terbuat dari bahan sintetis yang berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 10,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// 	},
// 	{
// 		"name": "Tas Ransel",
// 		"brand": "Herschel",
// 		"price": 1500000,
// 		"color": "biru",
// 		"size": ["one size"],
// 		"description": "Tas ransel dengan desain yang stylish dan modern, terbuat dari bahan polyester yang ringan dan tahan lama.",
// 		"condition": "baru",
// 		"stock": 5,
// 		"availability": {
// 			"online": false,
// 			"offline": true
// 		}
// 	},
// 	{
// 		"name": "Kacamata Aviator",
// 		"brand": "Ray-Ban",
// 		"price": 2000000,
// 		"color": "emas",
// 		"size": ["one size"],
// 		"description": "Kacamata aviator dengan desain yang elegan dan klasik, terbuat dari bahan logam berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 8,
// 		"availability": {
// 			"online": true,
// 			"offline": false
// 		}
// 	},
// 	{
// 		"name": "Baju Renang",
// 		"brand": "Speedo",
// 		"price": 500000,
// 		"color": "biru tua",
// 		"size": ["XS", "S", "M", "L", "XL"],
// 		"description": "Baju renang dengan desain yang sporty dan ergonomis, terbuat dari bahan spandex yang nyaman dan tahan lama.",
// 		"condition": "baru",
// 		"stock": 12,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// 	},
// 	{
// 		"name": "Topi Baseball",
// 		"brand": "New Era",
// 		"price": 350000,
// 		"color": "hitam",
// 		"size": ["one size"],
// 		"description": "Topi baseball dengan desain yang simpel dan elegan, terbuat dari bahan katun berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 18,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// 	},
// 	{
// 		"name": "Rompi",
// 		"brand": "Zara",
// 		"price": 850000,
// 		"color": "abu-abu",
// 		"size": ["S", "M", "L"],
// 		"description": "Rompi dengan desain yang stylish dan modern, terbuat dari bahan wol yang nyaman dan berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 7,
// 		"availability": {
// 			"online": true,
// 			"offline": false
// 		}
// 	},
// 	{
// 		"name": "Jas",
// 		"brand": "Hugo Boss",
// 		"price": 4500000,
// 		"color": "hitam",
// 		"size": ["40R", "42R", "44R"],
// 		"description": "Jas dengan desain yang elegan dan klasik, terbuat dari bahan wol yang nyaman dan berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 3,
// 		"availability": {
// 			"online": false,
// 			"offline": true
// 		}
// 	},
// 	{
// 		"name": "Sepatu Loafers",
// 		"brand": "Gucci",
// 		"price": 8000000,
// 		"color": "coklat",
// 		"size": ["40", "41", "42", "43", "44"],
// 		"description": "Sepatu loafers dengan desain yang mewah dan elegan, terbuat dari bahan kulit yang berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 6,
// 		"availability": {
// 			"online": true,
// 			"offline": false
// 		}
// 	}
// ]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });