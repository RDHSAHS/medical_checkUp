const express = require('express')
const userRouter = require('../routers/userRouter')
const labRouter = require('../routers/labRouter')
const resRouter = require('../routers/resultRouter')
const UserController = require('../controllers/userController')

const router = express.Router()

router.get('/', UserController.showHome)

router.use('/user', userRouter)
router.use('/lab', labRouter)
router.use('/result', resRouter)

module.exports = router