const express = require('express')
require('dotenv').config()

const cors = require('cors')
const router = require("./routes/index.js")
require('./config/database')


const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "0.0.0.0"
app.listen(PORT, HOST, () => console.log("App listening on port" + PORT))