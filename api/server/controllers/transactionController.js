const constructor = require('../models/transaction') // importando o Schema colaborador

module.exports = { // exporta os métodos


    async store(req,res){ // rota de post NOTA: lembre-se de usar async, try e catch para  as requisições
        try{
            const data = await (constructor.create(req.body)) // criando um modelo com as informações passadas no corpo da requisição
        
            return res.send( {data} ) // enviando o modelo atraves do método send, em formato json 
        }catch(err){

            if (err.name == "MongoError" && err.code == 11000){
                console.log("usuario ja existe")
            } 
            else {
                console.log("houve um erro ao criar o usuario"+err)
            }
        }
    },
    

    async index(req, res){
            const data = await constructor.find() // procura por dados dentro da collection

            return res.json(data); // retorna um json com os dados
    },
   
    async indexMonth(req, res){
            const data = await constructor.find({"month":req.params.month});

            // }) // procura por dados dentro da collection
            return res.json(data); // retorna um json com os dados
    }


}