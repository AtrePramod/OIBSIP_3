const express = require('express')
const router = express.Router();
const User = require('../models/userModel')

//post REQUEST
router.post('/register', (req, res) => {
    const { name, email, password, address } = req.body
    const newUser = new User({ name, email, password, address })
    try {
        newUser.save()
        res.status(200).json({ success: true, message: 'Register success' })
    } catch (error) {
        res.status(400).json({ message: `${error}." pramodd"`, })

    }
});
module.exports = router;
