const { Router } = require("express");
const TurmasController = require("../controllers/TurmasController");

const router = Router();

router.post("/turmas", TurmasController.criaTurma);

module.exports = router;