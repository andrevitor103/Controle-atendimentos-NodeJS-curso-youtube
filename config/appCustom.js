const router = require("../routers");
const conexao = require("../infraestrutura/conexao");
const tabelas = require("../infraestrutura/tabelas");

module.exports = (app, express) => {
  router(app, express);
  tabelas.init(conexao);
};
