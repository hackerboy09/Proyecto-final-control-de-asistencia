const { request, response } = require("express");
const pool = require("../db/connection");
const modeloLista = require("../models/maestro");

const getPaselista = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloLista.queryGetPaselista, (error) => {throw new Error(error) })
        
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

const getlistaByID = async (req = request, res = response) =>{
    
    const {Id_Alumno} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloLista.querygetListaByID, [Id_Alumno], (error) => {throw new Error(error) })
        
        if (!user) {
            res.status(404).json({msg: `No se encontró registro con el ID ${Id_Alumno}`})
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


const addPuntualidad = async (req = request, res = response) =>{
    
    const {
        Id_Alumno,
        Fecha,
        Estatus
    } = req.body

    if (
        !Id_Alumno ||
        !Fecha ||
        !Estatus
    ){
        res.status(400).json({msg: "Falta información del pase de lista"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloLista.queryListaExistente, [Id_Alumno])

        if (user) {
            res.status(403).json({msg: `El pase de lista ${Id_Alumno} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloLista.queryaddPuntualidad, 
        [ Id_Alumno,
            Fecha,
            Estatus
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del pase de lista ${Id_Alumno}`})
            return
        }
 
        res.json({msg: `El pase de lista ${Id_Alumno} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}




module.exports = {getPaselista, getlistaByID ,addPuntualidad}