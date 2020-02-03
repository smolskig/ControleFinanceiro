const mongoose = require('mongoose');
//models

const transactionSchema = new mongoose.Schema({ // criando o model Colaborador
    
    value:{
        type:Number,
        required: true
    },
    fullDate:{
        type:Date,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false,
    },
});

const constructor = mongoose.model('transactions',transactionSchema); // Definindo o nome e o Schema da collection, assim como salvando em uma variavel
module.exports = constructor