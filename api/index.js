const express = require("express");
const routes = require("./routes"); // Por padrão o js pega o index.js da pasta indicada.

const app = express();
const port = 3001;

routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;