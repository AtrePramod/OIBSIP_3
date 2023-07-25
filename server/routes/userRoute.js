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
        res.status(400).json({ message: `${error} `, })

    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.find({ email, password })
        if (user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0].Id
            }
            res.status(200).send(currentUser)
        }
        else {
            res.status(400).json({ message: 'Login Failed' })

        }
    } catch (error) {
        res.status(404).json({
            message: 'Something went wrong'
        })

    }
})

router.get('/getallusers', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(404).json({ message: error.stack })
    }
});
router.post('/deleteuser', async (req, res) => {
    const userid = req.body.userId
    try {
        await User.findOneAndDelete({ _id: userid })
        res.status(200).send("User deleted")
    } catch (error) {
        res.status(404).json({ message: error.stack })
    }
});


module.exports = router;

