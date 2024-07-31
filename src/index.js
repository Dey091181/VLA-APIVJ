const express = require("express");
const v1RouterAcceso = require("./v1/routes/AccesoRouter");
const RouterConsole = require("./v1/routes/ConsoleRoute");
const RouterVideoJuegos = require("./v1/routes/VideoJuegosRoute");
const RouterFormulario = require("./v1/routes/FormularioRoute")

const app = express();

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const puerto = process.env.PORT || 3015;
app.use(express.json());
app.use("/api/v1", v1RouterAcceso);
app.use("/api/v1/route", RouterConsole);
app.use("/api/v1/route", RouterVideoJuegos);
app.use("/api/v1/route", RouterFormulario);

app.get("/", (req, res) =>{
    res.send("Hola Mundo");
})

app.listen(puerto, () =>{
    console.log("Estoy llamando al puerto", puerto);
});