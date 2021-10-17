const conexao = require("../infraestrutura/conexao");
class AtendimentoModel {
  executaQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          return reject(error);
        }
        return resolve(resposta);
      });
    });
  }
  listar() {
    const sql = "SELECT * FROM atendimentos";
    return this.executaQuery(sql);
  }

  criar(novoAtendimento) {
    const sql = "INSERT INTO atendimentos SET ?";
    return this.executaQuery(sql, novoAtendimento);
  }

  atualizar(atendimentoAtualizado, id) {
    const sql = "UPDATE atendimentos SET ? WHERE id = ?";
    return this.executaQuery(sql, [atendimentoAtualizado, id]);
  }

  delete(id) {
    const sql = "DELETE FROM atendimentos WHERE id = ?";
    return this.executaQuery(sql, id);
  }
}

module.exports = new AtendimentoModel();
