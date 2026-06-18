const {
    createProduct,
    getAllProducts,
    findProductById,
    updateProduct,
    deleteProduct
} = require('../models/productModel.js');

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
 * Renderiza a página inicial da aplicação.
 * @param {Request} req  
 * @param {Response} res 
 */
exports.home = (req, res) => {
    res.render('home', { title: 'Home' });
};

/**
 * Renderiza a página de login.
 * @param {Request} req
 * @param {Response} res
 */
exports.login = (req, res) => {
    const error = req.query.error || null;
    res.render('login', { title: 'Login', error });
};

/**
 * Processa o envio do formulário de login e autentica o usuário.
 * @param {Request} req
 * @param {Response} res
 */
exports.processLogin = (req, res) => {
    const { email, password } = req.body;

    const demoUser = { email: 'admin@admin.com', password: '1234', name: 'Admin' };

    if (email === demoUser.email && password === demoUser.password) {
        req.session.user = { email: demoUser.email, name: demoUser.name };
        return res.redirect('/produtos');
    }

    return res.redirect('/login?error=Credenciais inválidas');
};

/**
 * Finaliza a sessão do usuário e redireciona para o login.
 * @param {Request} req
 * @param {Response} res
 */
exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/produtos');
        }
        res.clearCookie('connect.sid');
        return res.redirect('/login');
    });
};

/**
 * Renderiza a página Sobre.
 * @param {Request} req
 * @param {Response} res
 */
exports.sobre = (req, res) => {
    res.render('sobre', { title: 'Sobre' });
};

/**
 * Renderiza a página de contato.
 * @param {Request} req
 * @param {Response} res
 */
exports.contato = (req, res) => {
    res.render('contato', { title: 'Contato' });
};

/**
 * Exibe a lista de produtos cadastrados.
 * @param {Request} req
 * @param {Response} res
 */
exports.listProducts = (req, res) => {
    const products = getAllProducts();
    res.render('produtos', { title: 'Produtos', products });
};

/**
 * Cria um novo produto com base nos dados do formulário.
 * @param {Request} req
 * @param {Response} res
 */
exports.createProduct = (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.redirect('/produtos');
    }

    try {
        createProduct(name, description, parseFloat(price));
    } catch (error) {
        return res.redirect('/produtos');
    }

    res.redirect('/produtos');
};

/**
 * Remove um produto pelo seu ID.
 * @param {Request} req
 * @param {Response} res
 */
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id, 10);
    deleteProduct(id);
    res.redirect('/produtos');
};

/**
 * Exibe a página de edição de produto.
 * @param {Request} req
 * @param {Response} res
 */
exports.getEditProduct = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const product = findProductById(id);
    if (!product) {
        return res.redirect('/produtos');
    }
    res.render('edit', { title: 'Editar Produto', product });
};

/**
 * Atualiza os dados de um produto existente.
 * @param {Request} req
 * @param {Response} res
 */
exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, description, price } = req.body;

    updateProduct(id, {
        name,
        description,
        price: parseFloat(price)
    });

    res.redirect('/produtos');
};