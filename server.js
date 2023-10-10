const express = require("express")

const PORT = 5000

const initServer(port){
  const app = express()
  
  app.get("/", (req, res)=>{
    res.json({status: "ok", message: "hey"}
  })

  app.listen(PORT, () => { console.log(`server started on port ${port}`) })
}

initServer(PORT)

