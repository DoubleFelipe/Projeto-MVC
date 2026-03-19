const express = require('express');
const path = require('path');
const app = express();
const productRoutes = require('./routes/productRoutes');
const bodyParser = require('body-parser');

//Configura a pasta 'public' como estática
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', productRoutes);

app.get('/sobre', (req, res) => {
    res.render('sobre', { title: 'Sobre' });
});
app.get('/contato', (req, res) => {
    res.render('contato', { title: 'Contato' });
} );
app.get('/produtos', (req, res) => {
    res.render('produtos', { title: 'Produtos' });
});
app.get('/', (req, res) => {
   res.render('home', { title: 'Home' });
});
app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000");
});

