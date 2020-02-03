const express = require('express') // importando o express
const constructor = require('./models/transaction') //importando o construtor do Schema do banco
const Transaction = require('./controllers/transactionController') // importa o colabController dentro da variavel Colab

//routes
const routes = express.Router(); // criando o controlador de rotas

routes.post('/insert', Transaction.store); // chama o método store, dentro de Transaction
routes.get('/show', Transaction.index);
routes.get('/show/month/:month', Transaction.indexMonth);

module.exports = routes; // exportando o controlador de rotas para poder ser chamado no servidor


    