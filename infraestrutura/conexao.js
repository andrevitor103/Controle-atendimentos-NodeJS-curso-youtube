const mysql = require("mysql");
const config = require("config");

const conexao = mysql.createConnection({
  host: config.get("conexao.host"),
  port: config.get("conexao.port"),
  user: config.get("conexao.user"),
  password: config.get("conexao.password"),
  database: config.get("conexao.database"),
});

module.exports = conexao;
