const { GetDataTable } = require("../DB/SqlServer")

const GetAllEmployeeDataBusiness = async () => {
    return await GetDataTable("dbo.employee_get")
}

module.exports = {GetAllEmployeeDataBusiness}