const express = require('express')
const morgan = require('morgan')
require('colores')

const app = express()

//middlewares

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("<h1>welcome Hello from node server</h1>")
})

app.listen(8080, () => {
    console.log("Serever are running")
})