const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');
const router = express.Router();

// Auth (sem proteção)
router.get('/login', productController.login);
router.post('/login', productController.processLogin);
router.get('/logout', productController.logout);

// Páginas protegidas
router.get('/', auth.ensureAuthenticated, productController.home);
router.get('/sobre', auth.ensureAuthenticated, productController.sobre);
router.get('/contato', auth.ensureAuthenticated, productController.contato);

// CRUD de Produtos (protegido)
router.get('/produtos', auth.ensureAuthenticated, productController.listProducts);
router.post('/produtos', auth.ensureAuthenticated, productController.createProduct);
router.get('/delete/:id', auth.ensureAuthenticated, productController.deleteProduct);
router.get('/edit/:id', auth.ensureAuthenticated, productController.getEditProduct);
router.post('/edit/:id', auth.ensureAuthenticated, productController.updateProduct);

module.exports = router;