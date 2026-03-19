const { Product,products } = require('../models/productModel');

//Cria um produto
exports.createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = new Product(products.length + 1, name, price);
    products.push(newProduct);
    res.status(201).json(newProduct);
};

//Lista todos os produtos
exports.getAllProducts = (req, res) => {
    res.json(products);
};