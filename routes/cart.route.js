const express = require('express');
const { addToCart, getCart, updateCartItem, removeCartItem, clearCart } = require('../controllers/cart.controller');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

// Test Route
router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'Cart route is working !'})
});

// Add Item to Cart Route
router.post('/addToCart', isAuth, addToCart);

// Get Cart Route
router.get('/getCart', isAuth, getCart);

//Clear Cart Route
router.put('/clearCart', isAuth, clearCart);

// Update Cart Item Route
router.put('/:itemId', isAuth, updateCartItem);

// Delete Cart Item Route
router.delete('/:itemId', isAuth, removeCartItem);


module.exports = router;