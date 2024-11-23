const express = require('express');
const mustacheExpress = require('mustache-express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Configurando Mustache como motor de templates
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);

// Middleware
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: 'chave-secreta',
    resave: false,
    saveUninitialized: true,
  })
);

// Importar rotas
const routes = require('./routes');
app.use('/', routes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
