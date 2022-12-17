const database = require('../models'); // Por padrão o js procura o arquivo index.js dentro da pasta models que engloba todas as models.

class PessoaController {
    static async pegaTodasAsPessoas(req, res){ // Pesquisar sobre o async;
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error){
            return res.status(500).json(error.mensagem);
        }
    }
}

module.exports = PessoaController;