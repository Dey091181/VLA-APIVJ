const express = require("express");
const router = express.Router();
const consoleController = require("../../controllers/consoleController")

router
    .get("/ObtenerTodasConsolas", consoleController.ObtenerTodasLasConsolas)


module.exports = router;