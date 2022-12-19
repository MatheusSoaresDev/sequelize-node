const database = require("../models");
const {where} = require("sequelize"); // Por padrão o js procura o arquivo index.js dentro da pasta models que engloba todas as models.

class TurmasController {
    static async criaTurma(req, res) {
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = TurmasController;