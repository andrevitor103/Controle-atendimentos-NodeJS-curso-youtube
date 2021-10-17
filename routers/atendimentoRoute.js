//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const atendimentoController = require("../controllers/atendimentoController");

//get post put delete

router.get("/atendimentos", atendimentoController.buscar);

router.post("/atendimentos", atendimentoController.criar);

router.put("/atendimento/:id", atendimentoController.atualizar);

router.delete("/atendimento/:id", atendimentoController.deletar);

module.exports = router;
