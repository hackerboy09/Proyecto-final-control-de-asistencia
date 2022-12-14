const {Router} = require("express")
const {getMaestro, getMaestroByID,  addMaestro} = require("../controllers/adminM")
const router = Router()

//http://localhost:4008/api/v1/adminM

/// GET ///
router.get("/", getMaestro)
router.get("/IntMaestro/:IntMaestro", getMaestroByID)

/// POST ///
router.post("/", addMaestro)

module.exports = router