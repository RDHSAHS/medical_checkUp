const express = require('express')
const UserController = require('../controllers/userController')
const LabController = require('../controllers/labController')

const user = express.Router()

const isLoggedIn = function (req, res, next) {
  if (!req.session.userId) {
    const error = `Please Login First`
    res.redirect(`/user/login?error=${error}`)
  } else {
    next()
  }
}
const isAdmin = function (req, res, next) {
  if (req.session.userId && req.session.role === 'admin') {
    next();
  } else {
    const error = 'You have no access';
    res.redirect(`/user/login?error=${error}`);
  }
}


user.get('/register', UserController.registerForm)
user.post('/register', UserController.register)
user.get('/login', UserController.loginForm)
user.post('/login', UserController.login)
user.get('/logout', isLoggedIn, UserController.logout)
user.get('/:userId/userprofile', UserController.userProfile)
user.get('/:userId/userprofile/addprofile', UserController.addProfileForm)
user.post('/:userId/userprofile/addprofile', UserController.addProfile)

user.get('/:userId/bookTest', LabController.bookTestDate)
user.post('/:userId/bookTest', LabController.bookTest)


module.exports = user