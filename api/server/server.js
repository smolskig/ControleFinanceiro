const express = require('express'); // importando o express
const database = require('./database') // importando o banco
const routes = require('./routes') //importando as rotas
var cors = require('cors')
//server
const app = express(); // instanciando o servidor

app.use(cors())
app.use(express.json()); //sinalizando para o servidor entender json
app.use(routes) // delegando à instancia do servidor, que utilize as rotas

app.listen(3000,'0.0.0.0',()=>{ //sinalizando a porta do servidor
    console.log("Api servindo na porta 3000")
});

