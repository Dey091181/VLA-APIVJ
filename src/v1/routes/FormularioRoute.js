const express = require("express");
const router = express.Router();
const formularioController = require("../../controllers/formularioController")

router
    .post("/enviarformulario", formularioController.GuardarFormulario)


module.exports = router;