const express = require("express");
const router = express.Router();
const accesoController = require("../../controllers/accesoController");




router
    .post("/validar", accesoController.CredencialesAcceso);



module.exports = router;