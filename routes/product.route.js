const express = require('express');
const { addProduct, getProducts, getOne, editProduct, deleteProduct } = require('../controllers/product.controller');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

//Test Route
router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'Product route is working !'});
});

// Add Product Route
router.post('/addProd', isAdmin, addProduct);
router.get('/getProds', getProducts);
router.get('/:id', getOne);
router.put('/:id', isAdmin, editProduct);
router.delete('/:id', isAdmin, deleteProduct);

module.exports = router;

