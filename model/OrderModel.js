const mongoose = require('mongoose');
const Order = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Auth',
        require: true
    },
    address: {
        type: Object,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    finalTotal: {
        type: Number,
        require: true
    },
    paymentMode: {
        type: String,
        require: true
    },
    paymentId: {
        type: String,
    },
    paymentStatus: {
        type: String,
        default: 'unpaid'
    },
    orderStatus: {
        type :String,
        default: 'process',
    }
},{
    collection: 'orders',
    timestamps: true
})

module.exports = mongoose.model("Order", Order)