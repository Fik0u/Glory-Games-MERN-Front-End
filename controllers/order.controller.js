const Order = require('../model/Order');


// 🔹 POST : Add New Order
exports.addOrder = async (req, res) => {
    try {
        const { products, total } = req.body;
        const newOrder = new Order({ products, total, user: req.user.id });
        await newOrder.save();
        res.status(201).json({ msg: 'Order placed successfully 🛒', newOrder });
    } catch (error) {
        res.status(400).json({ msg: "Couldn't place the order 🫤" });
    }
};

//🔹 GET : All Orders List
exports.allOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        if (orders.length === 0) {
            res.status(404).json({ msg: "There are no orders yet 🤔"});
        }
        res.status(200).json({ msg: 'Users orders list found successfully 🫡', orders});
    } catch (error) {
        res.status(400).json({ msg: "Couldn't find the users orders list"});
    }
};

//🔹 GET : User Orders List
exports.myOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        if (orders.length === 0) {
            res.status(404).json({ msg: "You didn't place any order yet 🫤"});
        };
        res.status(200).json({ msg: 'My orders list fetched successfully 📋', orders})
    } catch (error) {
        res.status(400).json({ msg: "Couldn't find the orders list 🙁"});
    }
};

//🔹 GET : One Order
exports.oneOrder = async (req, res) => {
    try {
        const { id } = req.params
        const order = await Order.findById(id);
        if (!order) {
            res.status(404).json({ msg: 'Order not found 🫤'})
        };

        if (order.user.toString() !== req.user.id && !req.user.isAdmin) {
            res.status(403).json({ msg: 'Access denied 😐'})
        };

        res.status(200).json({ msg: 'Order fetched successfully 📦', order })
    } catch (error) {
        res.status(400).json({ msg: "Couldn't find the order 🙁"})
    }
};

//🔹 PUT : Update Order Status
exports.updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const validStatus = ['In preparation', 'Shipped', 'Delivered'];

        if (!validStatus.includes(status)) {
            res.status(400).json({ msg: 'Invalid status 🛑'})
        };

        const order = await Order.findById(id);

        if (!order) {
            res.status(404).json({ msg: 'Order not found 🫤'})
        }; 

        if (!req.user.isAdmin) {
            res.status(403).json({ msg: 'Access denied 😐'})
        };

        order.status = status;
        await order.save();
        res.status(200).json({ msg: `Order status updated to ${status} successfully 🫡`, order })
    } catch (error) {
        res.status(400).json({ msg: "Couldn't update the order status 🙁"})
    }
};