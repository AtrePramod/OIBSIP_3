const express = require('express')
const morgan = require('morgan')
require('colores')
const dotenv = require('dotenv')
const connectDB = require('./config/config')


//config dotenv
dotenv.config()


//connect mongoBD
connectDB()

const app = express()

//middlewares

app.use(express.json())
app.use(morgan('dev'))


//routes
app.use("/api/pizzas", require("./routes/pizzaRoute"))
app.use("/api/users", require("./routes/userRoute"))




app.get('/', (req, res) => {
    res.send("<h1>welcome Hello from node server</h1>")
})
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Serever are running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`)
})