const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true 
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
        
    ],
    total: {
        type: Number,
        default: 0
    }, 
    createdAt : {
        type: Date,
        default: Date.now
    }
});


const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;









  