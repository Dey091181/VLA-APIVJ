const accesodatabase = require("../database/accesologin")

const CredencialesAcceso =(req, res) =>
    {
        console.log(req.body);
        const credencialesRecibidas = req.body;
        const credencialesExistentes = accesodatabase.obtenerUsuarios();
        const existeUsuario = credencialesExistentes.some(tx => tx.usuario===credencialesRecibidas.usuario);
        const existeContrasena = credencialesExistentes.some(tx => tx.contrasena===credencialesRecibidas.contrasena);

        if(existeUsuario && existeContrasena)
            {
                const RespuestaServicio =
                {
                    CodigoRespuesta: 1,
                    DetalleRespuesta: "Sesion iniciada",
                }

                res.send(RespuestaServicio);
            }
            else
            {
                const RespuestaServicio =
                {
                    CodigoRespuesta: -1,
                    DetalleRespuesta: "Credenciales incorrectas",
                }
                res.send(RespuestaServicio);
            }
    }




module.exports =
{
    CredencialesAcceso
}