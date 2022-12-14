const { request, response } = require("express");
const pool = require("../db/connection");
const modeloAlumno = require("../models/adminA");

const getAlumno = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloAlumno.queryGetAlumno, (error) => {throw new Error(error) })
        
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

const getAlumnoByID = async (req = request, res = response) =>{
    
    const {Id_Alumno} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloAlumno.querygetAlumnoByID, [Id_Alumno], (error) => {throw new Error(error) })
        
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


const addAlumno = async (req = request, res = response) =>{
    
    const {
        Id_Alumno,
        Id_Grupo,
        strNombre,
        strApellido,
        Str_Materia
    } = req.body

    if (
        !Id_Alumno ||
        !Id_Grupo ||
        !strNombre ||
        !strApellido ||
        !Str_Materia
    ){
        res.status(400).json({msg: "Falta información del Alumno"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloAlumno.queryAlumnoExistente, [strNombre])

        if (user) {
            res.status(403).json({msg: `El alumno ${strNombre} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloAlumno.queryaddAlumno, 
        [   Id_Alumno,
            Id_Grupo,
            strNombre,
            strApellido,
            Str_Materia
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del alumno ${strNombre}`})
            return
        }
 
        res.json({msg: `El alumno ${strNombre} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}




module.exports = {getAlumno, getAlumnoByID ,addAlumno}