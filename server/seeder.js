const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colores')
const connectDB = require('./config/config')
const Pizza = require('./models/pizzaModel')
const pizzas = require('./data/pizza-data')


//config dot env and mongodb conn

dotenv.config()
connectDB()

//import data

const importData = async () => {
    try {
        await Pizza.deleteMany();
        const smapleData = pizzas.map(pizza => { return { ...pizza } });
        await Pizza.insertMany(smapleData);
        console.log('Data imported')
        process.exit()
    } catch (error) {
        console.log(`${error}  is the error pramod`)
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
