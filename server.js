const express = require('express');
const path = require('path');

require('dotenv').config();

const connectDB = require('./config/connectDB');


const app = express();


// Middleware
app.use(express.json());

// Connection to DB
connectDB();

// Routes
//Authentication routes
app.use('/api/auth', require('./routes/auth.route'));

// Admin routes
app.use('/api/admin', require('./routes/admin.route'));

// Product routes
app.use('/api/product', require('./routes/product.route'));

// Order routes
app.use('/api/order', require('./routes/order.route'));

// Cart routes
app.use('/api/cart', require('./routes/cart.route'));

// To serve static files from 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




//Port
const PORT = process.env.PORT || 1999;

// Listen
app.listen(PORT, (err) => {
    err ? console.log("Server couldn't run 👾", err) : console.log(`Server is running on port ${PORT} 🤖`)
})












