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

router.post('/getpizzabyid', async (req, res) => {
    const pizzaId = req.body.pizzaId
    try {
        const pizza = await pizzaModel.findOne({ _id: pizzaId })
        res.send(pizza)
    } catch (err) {
        res.json({ message: err })

    }
})

router.post('/updatepizza', async (req, res) => {
    const updatedPizza = req.body.updatedPizza;
    try {
        const pizza = await pizzaModel.findOne({ _id: updatedPizza._id });
        pizza.name = updatedPizza.name,
            pizza.image = updatedPizza.image,
            pizza.description = updatedPizza.desc,
            pizza.category = updatedPizza.cate,
            pizza.prices = [updatedPizza.prices]
        await pizza.save();
        res.status(200).send(' pizza update success')

    } catch (err) {
        res.json({ message: err })

    }
})

router.post('/deletepizza', async (req, res) => {
    const pizzaId = req.body.pizzaId
    try {
        await pizzaModel.findOneAndDelete({ _id: pizzaId })
        res.status(200).send("pizza deleted");
    } catch (err) {
        res.status(400).json({ message: err })

    }
})

module.exports = router;
