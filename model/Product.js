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
        required: true,
      },
      subCategory: {
        type: String,
        required: true,
      },
      inStock: {
        type: Boolean,
        default: true
      },
      image: {
        type: String,
        default: 'https://icons.iconarchive.com/icons/dtafalonso/android-l/256/Play-Games-icon.png'
      }
}, {
      timestamps: true
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;






