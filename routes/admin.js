const {Router} = require("express")
const {getAlumnoconMaestro, addAdministrador, IniciarSA, EliminarByID} = require("../controllers/admin")
const router = Router()

//http://localhost:4008/api/v1/admin

/// GET ///
router.get("/", getAlumnoconMaestro)

/// POST ///
router.post("/", addAdministrador)
router.post("/IniciarSA", IniciarSA)

/// DELETE ///
router.delete("/", EliminarByID)



module.exports = router