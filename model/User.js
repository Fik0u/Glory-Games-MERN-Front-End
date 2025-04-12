const mongoose = require('mongoose');

// Schema for user model
const userSchema = new mongoose.Schema({})

const User = mongoose.model('user', userSchema);

module.exports = User;