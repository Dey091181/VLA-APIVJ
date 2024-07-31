const DB = require("../database/accesobasedatos.json");

const obtenerUsuarios = ()=>
{
    return DB.accesos;
}


module.exports=
{
    obtenerUsuarios
}