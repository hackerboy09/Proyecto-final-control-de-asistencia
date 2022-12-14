const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const pool = require("../db/connection");
const modeloAdmin = require("../models/admin");

const getAlumnoconMaestro = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloAdmin.queryGetAlumnoconMaestro, (error) => {throw new Error(error) })
        
        if (!users) {
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({users})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addAdministrador = async (req = request, res = response) =>{
    
    const {
        strNombre,
        strApellido,
        Usuario,
        Contrasena,
        Activo
      
    } = req.body

    if (
        !strNombre ||
        !strApellido ||
        !Usuario ||
        !Contrasena ||
        !Activo
    ){
        res.status(400).json({msg: "Falta información del administrador"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloAdmin.queryAdministradorExistente, [Usuario])

        if (user) {
            res.status(403).json({msg: `El administrador ${Usuario} ya se encuentra registrado.`})
            return
        }

        const salt = bcryptjs.genSaltSync()
        const ContrasenaCifrada = bcryptjs.hashSync(Contrasena, salt)

        const {affectedRows} = await conn.query(modeloAdmin.queryaddAdministrador, 
        [  strNombre,
            strApellido,
            Usuario,
            ContrasenaCifrada,
            Activo
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del administrador ${Usuario}`})
            return
        }
 
        res.json({msg: `El administrador ${Usuario} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const IniciarSA = async (req=request,res=response)=>{
    const {
        Usuario,
        Contrasena
    }=req.body

    if(
        !Usuario||
        !Contrasena
    ){
        res.status(400).json({msg:"Falta información del usuario."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloAdmin.queryIniciarSA,[Usuario])

        if(!user || user.Activo == 'N'){
            let code = !user ? 1: 2;
            res.status(403).json({msg:`El usuario o la contraseña son incorrectos`,errorCode:code})
            return
        }

        const accesoValido = bcryptjs.compareSync(Contrasena,user.Contrasena)

        if(!accesoValido){
            res.status(403).json({msg:`El usuario o la contraseña son incorrectos`,errorCode:"3"})
            return
        }


        res.json({msg:`El usuario ${Usuario} ha iniciado seción satisfactoriamenente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const EliminarByID = async (req = request, res = response) =>{
    
    const {id} = req.query
    let conn;
    
    try {
        conn = await pool.getConnection()
       
        const {affectedRows} = await conn.query(modeloAdmin.queryeliminarporID, [id], (error) => {throw new Error(error) })
       
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo eliminar el registro con el ID ${id}`})
            return
        }
 
        res.json({msg: `El usuario con ID ${id} se eliminó sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}



module.exports = {getAlumnoconMaestro, addAdministrador, IniciarSA, EliminarByID}