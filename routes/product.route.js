const express = require('express');
const { addProduct, getProducts, getOne, editProduct, deleteProduct, searchProducts } = require('../controllers/product.controller');
const isAdmin = require('../middleware/isAdmin');


const router = express.Router();

//Test Route
router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'Product route is working 🤩'});
});

//! Product Routes

// Add Product Route
router.post('/addProd', isAdmin, addProduct);

// Get Products List Route
router.get('/getProds', getProducts);

// Search Product Route
router.get('/searchProd', searchProducts);

// Get One Product Route
router.get('/:id', getOne);

// Update Product Route
router.put('/:id', isAdmin, editProduct);

// Delete Product Route
router.delete('/:id', isAdmin, deleteProduct);


module.exports = router;

