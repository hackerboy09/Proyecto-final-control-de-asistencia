const {Router} = require("express")
const {getAcMTwo} = require("../controllers/admintwo")
const router = Router()

//http://localhost:4008/api/v1/admintwo

/// GET ///
router.get("/", getAcMTwo)




module.exports = router