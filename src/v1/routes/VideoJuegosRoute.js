const express = require("express");
const router = express.Router();
const videojuegosController = require("../../controllers/videojuegosController")

router
    .get("/ObtenerTodosVideoJuegos", videojuegosController.ObtenerTodosLosVideoJuegos)


module.exports = router;