const VideoJuegosDB = require("../database/VideoJuegosDB")

const ObtenerTodosLosVideoJuegos = (req, res) =>
{
    const TodosLosVideoJuegos = VideoJuegosDB.ObtenerTodosLosVideoJuegos();

    const RespuestaServicio =
    {
        CodigoRespuesta: 0,
        DetalleRespuesta: "Transaccion Exitosa"
       
    }

    res.status(200).send({RespuestaServicio, TodosLosVideoJuegos});

}

module.exports =
{
    ObtenerTodosLosVideoJuegos
}