
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(express.json())

app.listen(8000,() => {
    console.log("Server Listining to port", 8000)
})