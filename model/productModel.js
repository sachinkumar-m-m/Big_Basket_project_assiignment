const mongoose = require('mongoose');
const productModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provid product title'],
        trim: true,
        unique: true,
        maxlength: [100, 'Name cannot be more than 100 characters.']
    },
    category: {
        type: String,
        required: [true, 'Please provid category']
    },
    price: {
        type: Number,
        required: [true, "Please provid price"]
    },
    qnty: {
        type: String,
        required: [true, "Pleaser provid quantity"]
    },
    desc: {
        type: String,
        required: [true, 'Please provid description']
    },
    image: {
        type: Object,
        required: [true, 'Please provid image object']
    },
    stock: {
        type: Number,
        required: [true, "Please provid stock"]
    },
    sold: {
        type: Number,
        default: 0
    },
    freeShipping: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Array,
        timestamps: []
    }
}, {
    collection: "products",
    timestamps: true
})

module.exports = mongoose.model("products", productModel)