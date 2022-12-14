const {Router} = require("express")
const {getPaselista, getlistaByID, addPuntualidad} = require("../controllers/maestro")
const router = Router()

//http://localhost:4008/api/v1/maestro

/// GET ///
router.get("/", getPaselista)
router.get("/Id_Alumno/:Id_Alumno", getlistaByID)

/// POST ///
router.post("/", addPuntualidad)






module.exports = router