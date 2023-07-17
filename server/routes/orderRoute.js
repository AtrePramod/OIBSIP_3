const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const stripe = require('stripe')('sk_test_51NTja5SCMaxcwsjuhj0q0J55QirscfXaetfNNTc8d1Uas7p2frBxV66QAVYl0pShGD9jg3sRySuGPx37rzToO8sd002iDTcLKD')


router.post('/placeorder', async (req, res) => {
    const { token, subTotal, currentUser, cartItems } = req.body;
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,

        });
        const payment = await stripe.charges.create({
            amount: subTotal * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email,
        }, {
            idempotencyKey: uuidv4(),
        });
        if (payment) {
            res.send('Payment Success')
        }
        else {
            res.send('Payment Fail')
        }
    } catch (error) {
        res.status(400).json({
            message: 'something went wrong',
            error: error.stack
        })

    }
})

module.exports = router