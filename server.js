const express = require('express');
const path = require('node:path');
const app = express();
const session = require('express-session');
const port = 3000;

app.use(session({
  secret: process.env.SESSION_SECRET || 'minhaChaveSecreta', // Chave para criptografar a sessão
  resave: false,  // Não salva a sessão se não houve modificações
  saveUninitialized: false, // Não salva sessões vazias
  cookie: {
    maxAge: 30 * 60 * 1000, // 30 minutos
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  }
}));

const productRoutes = require('./src/routes/productRoutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));


// View engine para ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Disponibiliza o usuário da sessão para as views
app.use((req, res, next) => {
  res.locals.user = req.session ? req.session.user : null;
  next();
});

// ROTAS
app.use('/', productRoutes );


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});