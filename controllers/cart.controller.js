const Cart = require('../model/Cart');
const Product = require('../model/Product');


// 🔹 POST : Add Item to Cart
exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: 'Product not foud 🙁'})
        };

        let cart = await Cart.findOne({ user: req.user.id });
        if (!cart) {
            cart = new Cart({ user: req.user.id, items: [] });
        }

        const item = cart.items.find(item => item.product.toString() === productId);

        if(item) {
            item.quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity })
        };

        await cart.save();
        res.status(200).json({ msg: 'Product added to cart 🛒', cart })
    } catch (error) {
        res.status(400).json({ msg: "Couldn't add to cart" })
    }
};

// 🔹 GET : Get User's Cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id });

        if (!cart || cart.items.length === 0) {
            res.status(404).json({ msg: 'Cart is empty 😿'})
        }
        res.status(200).json({ msg: 'Cart fetched successfully 🫡', cart})
    } catch (error) {
        res.status(400).json({ msg: "Couldn't find the cart"})
    }
};

// 🔹 PUT : Update a Cart Item
exports.updateCartItem = async (req, res) => {
    const { itemId } = req.params;
    const { quantity } = req.body;
    try {
        const cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            res.status(404).json({ msg: 'Cart not found 🙁'})
        }

        const item = cart.items.id(itemId)
        if (!item) {
            res.status(404).json({ msg: 'Item not found in cart 🤷‍♂️'})
        }

        item.quantity = quantity;

        await cart.save();
        res.status(200).json({ msg: 'Cart item updated successfully 🫡', cart})
    } catch (error) {
        res.status(400).json({ msg: "Couldn't update cart 🫤" })
    }
};

// 🔹 DELETE : Remove an Item from Cart
exports.removeCartItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const cart = await Cart.findOne({ user: req.user.id });
        if (!cart) {
            res.status(404).json({ msg: 'Cart not found 🙁'})
        }

        cart.items = cart.items.filter(item => item._id.toString() !== itemId);
        await cart.save();

        if(cart.items.length === 0) {
            return res.status(200).json({ msg: 'Cart is now empty 🧹'})
        };
        res.status(200).json({ msg: 'Item removed from cart successfully 🫡', cart })
    } catch (error) {
        res.status(400).json({ msg: "Couldn't remove item from cart 🫤"})
    }
};
