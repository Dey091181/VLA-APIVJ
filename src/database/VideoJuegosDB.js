const path = require ('path');

const db_file_path = path.join (__dirname, '../database/VideoJuegos.json');


const ObtenerTodosLosVideoJuegos= () =>
{
    try
    {
        let infoVideoJuegos = require(db_file_path);
        return infoVideoJuegos.VideoJuegos;
    }
    catch(error)
    {
        return error;
    }
}

module.exports =
{
    ObtenerTodosLosVideoJuegos
}