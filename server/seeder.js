const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colores')
const connectDB = require('./config/config')
const Pizza = require('./models/pizzaModel')
const Pizzas = require('./data/pizza-data')


//config dot env and mongodb conn

dotenv.config()
connectDB()

//import data

const importData = async () => {
    try {
        await Pizza.deleteMany()
        const smapleData = Pizzas.map(pizza => { return { ...pizza } })
        await Pizza.insertMany(smapleData)
        console.log('Dta imported')
        process.exit()
    } catch (error) {
        console.log(`${error}  is the error`)
        process.exit(1)
    }
}
const dataDestroy = () => { };

if (process.argv[2] === '-d') {
    dataDestroy()
}
else {
    importData();
}
