const express = require('express');
const {loginUser, registerUser } = require('../controllers/userController')

const router = express.Router()

// log-in
router.post('/login', loginUser)

//register
router.post('/register', registerUser)

module.exports = router