const express = require('express') 
const adminMRouter = require('./routes/adminM')
const adminARouter = require('./routes/adminA')
const adminRouter = require('./routes/admin')
const admintwoRouter = require('./routes/admintwo')
const maestroRouter = require('./routes/maestro')
const cors = require("cors")

class Server{
    constructor(){
      this.app = express()
      this.paths = {
         adminM:"/api/v1/adminM",
         adminA:"/api/v1/adminA",
         admin:"/api/v1/admin",
         admintwo:"/api/v1/admintwo",
         maestro:"/api/v1/maestro"
        }
        this.middlewares()
        this.routes()
      
    }

routes(){
    
    this.app.use(this.paths.adminM, adminMRouter)
    this.app.use(this.paths.adminA, adminARouter)
    this.app.use(this.paths.admin, adminRouter)
    this.app.use(this.paths.admintwo, admintwoRouter)
    this.app.use(this.paths.maestro, maestroRouter)
}

middlewares() {
  this.app.use(cors()) 
  this.app.use(express.json()) 
}

listen(){
    this.app.listen(process.env.PORT,() => { 
    console.log("Backend en ejecución en el puerto", process.env.PORT)
})
}
}

module.exports = Server
