const express = require('express')
const router = express.Router();
const pizzaModel = require('../models/pizzaModel')

//GET ALL PIZZA || GET REQUEST
router.get('/getAllPizzas', async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({})
        res.send(pizzas)
    } catch (err) {
        res.json({ message: err })

    }
})
router.post('/addpizza', async (req, res) => {
    const { pizza } = req.body;
    try {
        const newPizza = new pizzaModel({
            name: pizza.name,
            image: pizza.image,
            varients: ['small', 'medium', 'large'],
            description: pizza.desc,
            category: pizza.cate,
            prices: [pizza.prices]

        })
        await newPizza.save();
        res.status(201).send('new pizza added')

    } catch (err) {
        res.json({ message: err })

    }
})
module.exports = router;
