const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/produtos', (req, res) => {
    res.render('produtos', { title: 'Produtos' });
});


router.get('/api/produtos/get', productController.getAllProducts);
router.post('/api/produtos', productController.createProduct);
router.get('/api/produtos/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
});