const Product = require("../model/Product");


// 🔹 POST : Add new product
exports.addProduct = async (req, res) => {
    try {
        const newProduct = new Product({ ...req.body });
        await newProduct.save();
        res.status(201).json({ msg: 'Product added successfully', newProduct });
    } catch (error) {
        res.status(400).json({ msg: 'Error adding product', error })        
    }
};

// 🔹 GET : Products list
exports.getProducts = async (req, res) => {
    try {
        const prodsList = await Product.find();
        res.status(200).json({ msg: 'Products fetched successfully', prodsList });
    } catch (error) {
        res.status(400).json({ msg: "Couldn't find the products list", error });
    }
};

// 🔹 GET : Search Product
exports.searchProducts = async (req, res) => {
    try {
        const keyword = req.query.keyword 
    ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    }
    : {};

    const products = await Product.find({ ...keyword }).select('name price image');
        res.status(200).json({ msg: 'Products found successfully 😃', products});
    } catch (error) {
        res.status(400).json({ msg: "Couldn't search the products 🙁"})
    }
};


// 🔹 GET : One product
exports.getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const oneProd = await Product.findById(id);
        if (!oneProd) 
            return res.status(404).json({ msg: "Product not found" });
        res.status(200).json({ msg: 'Product fetched successfully', oneProd });
    } catch (error) {
        res.status(400).json({ msg: "Couldn't find the product", error });
    }
};


// 🔹 PUT : Update product
exports.editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const changeProd = req.body;
        const prod = await Product.findById(id);

        if (!prod) {
            return res.status(404).json({ msg: "Product not found" });
        }
        const editedProd = await Product.findByIdAndUpdate(id, changeProd, { new: true });

        res.status(200).json({ msg: 'Product edited successfully', editedProd});
    } catch (error) {
        res.status(400).json({ msg: 'Error editing product', error });
    }
};


// 🔹 DELETE : Delete product
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const prod = await Product.findById(id);

        if (!prod) {
            return res.status(404).json({ msg: "Product not found" }); 
        }
        const deletedProd = await Product.findByIdAndDelete(id);
        
        res.status(200).json({ msg: 'Product deleted successfully', deletedProd }); 
    } catch (error) {
        res.status(400).json({ msg: 'Error deleting product', error });
    }
};


