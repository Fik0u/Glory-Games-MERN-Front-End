const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true,
        min: 0
      },
      category: {
        type: String,
      },
      inStock: {
        type: Boolean,
        default: true
      },
      image: {
        type: String,
        default: ''
      }
}, {
      timestamps: true
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;






