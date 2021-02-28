const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require("./routes/index.js")
require('./config/database')


const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)




const PORT = process.env.PORT||4000
const HOST= process.env.HOST||'0.0.0.0'

app.listen(PORT, HOST,()=> console.log("App listening on port" + PORT))