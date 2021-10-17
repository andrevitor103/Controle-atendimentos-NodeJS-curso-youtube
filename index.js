const express = require("express");
const app = express();
const config = require("config");
const port = 3000;
const appCustom = require("./config/appCustom");

appCustom(app, express);

app.listen(config.get("port"), (error) => {
  if (error) {
    console.log("Deu erro");
    return;
  }
  console.log("Rodando que e uma belezinha...");
});
