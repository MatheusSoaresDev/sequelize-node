const database = require('../models');
const {where} = require("sequelize"); // Por padrão o js procura o arquivo index.js dentro da pasta models que engloba todas as models.

class PessoaController {
    static async pegaTodasAsPessoas(req, res){ // Pesquisar sobre o async;
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;

        try{
            const umaPessoa = await database.Pessoas.findOne( {
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaPessoa);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body;
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaPessoa(req, res) {
        const id = req.params.id;
        const novasInfos = req.body;

        try{
            await database.Pessoas.update(novasInfos, { where: { id: id } } );
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pessoaAtualizada);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deletaPessoa(req, res) {
        const id  = req.params.id;

        try {
            await database.Pessoas.destroy({
                where: {
                    id: id
                }
            });
            return res.status(200).send("Pessoa deletada com sucesso!");
        } catch (error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;