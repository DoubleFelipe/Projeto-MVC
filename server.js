const express = require('express');
const path = require('node:path');
const app = express();
const port = 3000;

const productRoutes = require('./routes/productRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// view engine
app.set('view engine', 'ejs');

// rotas
app.use('/', productRoutes );

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});