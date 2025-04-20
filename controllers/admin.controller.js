const User = require('../model/User');
const Order = require('../model/Order');
const Cart = require('../model/Cart');

// Get users list
exports.allUsers = async (req, res) => {
    try {
        const usersList = await User.find();
        res.status(200).json({ success: { msg: 'Users list found successfully 🫡' }, usersList })
    } catch (error) {
        res.status(400).json({ errors: { msg: "Couldn't find users list 🙁" }})
    }
};

// Get one user profile
exports.oneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const getUser = await User.findById(id);
        if (!getUser) {
            return res.status(404).json({ errors: { msg: 'User not found 🤷‍♂️' }})
        }
        res.status(200).json({ success: { msg: 'User found successfully 🫡' }, getUser })
    } catch (error) {
        res.status(400).json({ errors: { msg: "Couldn't find the user 🙁" }})
    }
};

// Delete user account
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ errors: { msg: 'User not found 🤷‍♂️' }})
        };
        // To delete this user's orders also
        await Order.deleteMany({ user: id });

        // To also delete his cart
        await Cart.deleteOne ({ user: id });

        res.status(200).json({ success: {msg: 'User & related data deleted successfully 🫡' }, deletedUser })
    } catch (error) {
        res.status(400).json({ errors: { msg: "Couldn't delete the user 🙁" }})
    }
};