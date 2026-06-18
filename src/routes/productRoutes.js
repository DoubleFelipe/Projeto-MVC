const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');
const router = express.Router();


router.get('/login', productController.login);
router.post('/login', productController.processLogin);
router.get('/logout', productController.logout);

// Páginas protegidas
router.get('/', auth.autenticacao, productController.home);
router.get('/sobre', auth.autenticacao, productController.sobre);
router.get('/contato', auth.autenticacao, productController.contato);

// CRUD de Produtos
router.get('/produtos', auth.autenticacao, productController.listProducts);
router.post('/produtos', auth.autenticacao, productController.createProduct);
router.get('/delete/:id', auth.autenticacao, productController.deleteProduct);
router.get('/edit/:id', auth.autenticacao, productController.getEditProduct);
router.post('/edit/:id', auth.autenticacao, productController.updateProduct);

module.exports = router;