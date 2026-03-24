const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// páginas
router.get('/', productController.home);
router.get('/sobre', productController.sobre);
router.get('/contato', productController.contato);

// CRUD de Produtos
router.get('/produtos', productController.listProducts);
router.post('/produtos', productController.createProduct);
router.get('/delete/:id', productController.deleteProduct);
router.get('/edit/:id', productController.getEditProduct);
router.post('/edit/:id', productController.updateProduct);

module.exports = router;