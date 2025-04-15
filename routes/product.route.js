const express = require('express');
const { addProduct, getProducts, getOne, editProduct, deleteProduct } = require('../controllers/product.controller');

const router = express.Router();

//Test Route
router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'Product route is working !'});
});

// Add Product Route
router.post('/addProd', addProduct);
router.get('/getProds', getProducts);
router.get('/:id', getOne);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

