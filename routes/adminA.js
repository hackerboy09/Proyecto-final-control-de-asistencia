const {Router} = require("express")
const {getAlumno, getAlumnoByID, addAlumno} = require("../controllers/adminA")
const router = Router()

//http://localhost:4008/api/v1/adminA

/// GET ///
router.get("/", getAlumno)
router.get("/Id_Alumno/:Id_Alumno", getAlumnoByID)

/// POST ///
router.post("/", addAlumno)


module.exports = router