const express = require('express')
const UserController = require('../controllers/userController')

const user = express.Router()

user.get('/register', UserController.registerForm)
user.post('/register', UserController.register)
user.get('/login', UserController.loginForm)
user.post('/login', UserController.login)
user.get('/logout', UserController.logout)


module.exports = user