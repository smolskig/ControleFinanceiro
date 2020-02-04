require('dotenv').config();
const mongoose = require('mongoose'); // importando o mongoose


//database
mongoose.Promise = global.Promise; // para evitar bugs no banco
//conectando o banco 
mongoose.connect("mongodb+srv://admin:admin123@cluster0-mq0lw.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,  useUnifiedTopology: true, useCreateIndex: true}) // configurações para evitar erros no baco
.then(()=>{
    console.log('banco conectado')
})
.catch((err)=>{
    console.log('houve um erro ao conectar'+err)
});