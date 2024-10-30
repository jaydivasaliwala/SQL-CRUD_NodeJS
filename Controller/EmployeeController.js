const { GetAllEmployeeDataBusiness } = require("../Business/EmployeeBusiness")
const { responseModel } = require("../Model/Response/Response")

const GetAllEmployee = async (req,res) => {
    const data = await GetAllEmployeeDataBusiness();
    responseModel(res,200,"Records get succesfully",false,data)
}

module.exports = {GetAllEmployee}