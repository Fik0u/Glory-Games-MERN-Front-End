const mongoose = require('mongoose');

// Schema for user model
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    phone: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
        default: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    }
    },
{
// Automatically add createdAt and updatedAt timestamps
    timestamps: true,
}
)

const User = mongoose.model('user', userSchema);

module.exports = User;