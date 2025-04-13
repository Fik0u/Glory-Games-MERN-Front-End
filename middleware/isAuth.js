const jwt = require('jsonwebtoken');
const User = require('../model/User');


const isAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ errors : [{ msg: 'Unauthorized' }]});

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const foundUser = await User.findOne({ _id: decoded.id });

        if (!foundUser) return res.status(404).json({ errors : [{ msg: 'User not found' }]});

        req.user = foundUser;
        next();

    } catch (error) {
        res.status(400).json({ errors: [{ msg: 'Invalid Token' }]});
    }
}

module.exports = isAuth;