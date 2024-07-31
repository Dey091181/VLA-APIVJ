const formularioDB = require("../database/FormularioDB")

const GuardarFormulario = (req, res) =>
    {        
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
     
        const nuevaFormulario = req.body;

        const RespuestaServicio = 
        {
            CodigoRespuesta:-1,
            DetalleRespuesta: "No se pudo ingresar Formulario"
        }

        try 
        {
            formularioDB.guardarFormulario(nuevaFormulario);
    
            RespuestaServicio.CodigoRespuesta = 0;
            RespuestaServicio.DetalleRespuesta = "Formulario Ingresado";

            res.status(200).send({RespuestaServicio});
        } 
        catch (error) 
        {
            res.status(500).send({RespuestaServicio});
        }
    
       
    
    }
        
    module.exports =
    {
        GuardarFormulario
    }