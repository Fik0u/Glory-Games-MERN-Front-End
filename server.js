const express = require('express');

require('dotenv').config();

const connectDB = require('./config/connectDB');


const app = express();

// Middleware
app.use(express.json());

// Connection to DB
connectDB();

// Routes




//Port
const PORT = process.env.PORT || 1999;

// Listen
app.listen(PORT, (err) => {
    err ? console.log("Server couldn't run 👾", err) : console.log(`Server is running on port ${PORT} 🤖`)
})