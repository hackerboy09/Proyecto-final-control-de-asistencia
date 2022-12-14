const { request, response } = require("express");
const pool = require("../db/connection");
const modeloMaestro = require("../models/adminM");

const getMaestro = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloMaestro.queryGetMaestro, (error) => {throw new Error(error) })
        
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

const getMaestroByID = async (req = request, res = response) =>{
    
    const {IntMaestro} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloMaestro.querygetMaestroByID, [IntMaestro], (error) => {throw new Error(error) })
        
        if (!user) {
            res.status(404).json({msg: `No se encontró registro con el ID ${IntMaestro}`})
            return
        }
        res.json({user})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const addMaestro = async (req = request, res = response) =>{
    
    const {
        IntMaestro,
        StrNombre,
        StrApellido,
        IdGrupo,
        UserM,
        Activo
    } = req.body

    if (
        !IntMaestro ||
        !StrNombre ||
        !StrApellido ||
        !IdGrupo ||
        !UserM ||
        !Activo
    ){
        res.status(400).json({msg: "Falta información del Maestro"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloMaestro.queryMaestroExistente, [UserM])

        if (user) {
            res.status(403).json({msg: `El maestro ${UserM} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloMaestro.queryaddMaestro, 
        [ IntMaestro,
            StrNombre,
            StrApellido,
            IdGrupo,
            UserM,
            Activo
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del maestro ${UserM}`})
            return
        }
 
        res.json({msg: `El maestro ${UserM} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}




module.exports = {getMaestro, getMaestroByID ,addMaestro}