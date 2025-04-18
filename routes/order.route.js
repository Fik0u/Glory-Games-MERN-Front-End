const express = require('express');
const { addOrder, myOrders, allOrders, oneOrder, updateStatus } = require('../controllers/order.controller');
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');


const router = express.Router();


// Test Route 
router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'Order route is working 🥳'})
});

// Add Order Route
router.post('/addOrder', isAuth, addOrder);

// Get All Orders Route
router.get('/all', isAuth, isAdmin, allOrders);

// Get User's Orders Route
router.get('/myOrders', isAuth, myOrders);

// Get One Order Route
router.get('/:id', isAuth, oneOrder);

// Update Order Status Route
router.put('/:id', isAuth, isAdmin, updateStatus);



module.exports = router;