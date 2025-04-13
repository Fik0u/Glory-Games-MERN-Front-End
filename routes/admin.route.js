const express = require('express');
const { allUsers, oneUser, deleteUser } = require('../controllers/admin.controller');

const router = express.Router();


// Test route
router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'Admin test route is working ! 👌' })
});

//! Admin routes
//These are the routes that allow the admin to fetch users list or get one user, and delete his account

// isAdmin middleware is used to protect the route and only allow access to the admin

//Users list route
router.get('/users', allUsers);

//One user route
router.get('/:id', oneUser);

//Delete user route
router.delete('/:id', deleteUser);

module.exports = router;