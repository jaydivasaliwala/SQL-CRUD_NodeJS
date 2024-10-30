const mssql = require('mssql')
const dotenv = require('dotenv').config()

const GetDataTable = async (sp_name) => {
    
    return await mssql.connect(dotenv.parsed.connectionStr)
    .then(async()=>{
        const req = new mssql.Request();
        const data = await req.execute(sp_name)
        return data.recordset
    })
    .catch((err)=>{
        console.log(err)
        console.log("Connection Failed...")
    })
}

module.exports = {GetDataTable}

