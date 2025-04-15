const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      price: {
        type: Number,
        required: true,
        min: 0
      },
      category: {
        type: String,
        required: true,
        trim: true
      },
      inStock: {
        type: Boolean,
        default: true
      },
      image: {
        type: String,
        default: ''
      }

});

const Product = mongoose.model('product', productSchema);

module.exports = Product;






