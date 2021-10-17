const routerAtendimento = require("./atendimentoRoute");
module.exports = (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerAtendimento);
};
