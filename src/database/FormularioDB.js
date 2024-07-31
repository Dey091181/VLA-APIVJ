const path = require ('path');
const fs =  require('fs');

const db_file_path = path.join (__dirname, '../database/Formulario.json');


const guardarFormulario = (Datosformulario) =>
{
    try
    {
        let infoFormulario = require(db_file_path);
        infoFormulario.Datosformulario.push(Datosformulario);
        fs.writeFileSync(db_file_path, JSON.stringify(infoFormulario, null, 2));
    }
    catch(error)
    {
        console.log("Error al guardar formulario", error);
    }
}

module.exports =
{
    guardarFormulario
}