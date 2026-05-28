const { Product, products } = require('../models/productModel.js');

let idCounter = 1;

exports.home = (req, res) => {
    res.render('home', { title: 'Home' });
};

exports.login = (req, res) => {
    const error = req.query.error || null;
    res.render('login', { title: 'Login', error });
};

exports.processLogin = (req, res) => {
    const { email, password } = req.body;

    // Usuário de exemplo 
    const demoUser = { email: 'admin@admin.com', password: '1234', name: 'Admin' };

    if (email === demoUser.email && password === demoUser.password) {
        req.session.user = { email: demoUser.email, name: demoUser.name };
        return res.redirect('/produtos');
    }

    return res.redirect('/login?error=Credenciais inválidas');
};

// Logout
exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/produtos');
        }
        res.clearCookie('connect.sid');
        return res.redirect('/login');
    });
};

exports.sobre = (req, res) => {
    res.render('sobre', { title: 'Sobre' });
};

exports.contato = (req, res) => {
    res.render('contato', { title: 'Contato' });
};

exports.listProducts = (req, res) => {
    res.render('produtos', { title: 'Produtos', products });
};

exports.createProduct = (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.redirect('/produtos');
    }

    const newProduct = new Product(idCounter++, name, description, parseFloat(price));
    
    products.push(newProduct);

    res.redirect('/produtos');
};

exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(product => product.id === id);
    
    if (index !== -1) {
        products.splice(index, 1);
    }

    res.redirect('/produtos');
};

exports.getEditProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.redirect('/produtos');
    }
    res.render('edit', { title: 'Editar Produto', product });
};

exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, price } = req.body;
    const product = products.find(p => p.id === id);
    if (product) {
        product.name = name;
        product.description = description;
        product.price = parseFloat(price);
    }
    res.redirect('/produtos');
};