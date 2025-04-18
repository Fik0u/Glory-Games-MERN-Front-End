const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
    {
        product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
    }
    ],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['In preparation', 'Shipped', 'Delivered'],
        default: 'In preparation'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Order = mongoose.model('order', orderSchema);

module.exports = Order;