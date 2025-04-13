const { check, validationResult } = require("express-validator");


// Register middleware to validate request body
exports.registerValidation = () => [
    check('fullName', 'Full name is required').not().isEmpty(),
    check('email', 'Include a valid email').isEmail(),
    check('password', 'Password must contain at least 6 characters').isLength({ min: 6 }),
]

// Login validation
exports.loginValidation = () => [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please entrer a password with 6 or more characters').isLength({ min: 6 }),
]

//Validate results
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).json({ errors : errors.array() });
}