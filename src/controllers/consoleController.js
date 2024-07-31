const consoleDB = require("../database/ConsolesDB")

const ObtenerTodasLasConsolas = (req, res) =>
{
    const TodasLasConsolas = consoleDB.ObtenerTodasLasConsolas();

    const RespuestaServicio =
    {
        CodigoRespuesta: 0,
        DetalleRespuesta: "Transaccion Exitosa"
       
    }

    res.status(200).send({RespuestaServicio, TodasLasConsolas});

}

module.exports =
{
    ObtenerTodasLasConsolas
}