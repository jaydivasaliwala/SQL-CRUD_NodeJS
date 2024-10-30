const express = require('express')
const { EmployeeRoute } = require('./Route/EmployeeRoute')
const app = express()

app.use("/api",EmployeeRoute)

app.listen(2709,()=>{
    console.log("Server running...")
})