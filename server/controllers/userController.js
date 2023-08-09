const mongoose = require('mongoose');
const User = require('../models/userModel');

// log-in user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}
// register
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.register(email, password)
        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    registerUser,
}