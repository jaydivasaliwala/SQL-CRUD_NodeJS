const {Router} = require('express') 
const { GetAllEmployee } = require('../Controller/EmployeeController')
const EmployeeRoute = Router()

EmployeeRoute.get("/getallemployee",GetAllEmployee)

module.exports = {EmployeeRoute}