const express = require('express')
const userRouter = require('../routers/userRouter')
const labRouter = require('../routers/labRouter')
const resRouter = require('../routers/resultRouter')

const router = express.Router()

router.use('/user', userRouter)
router.use('/lab', labRouter)
router.use('/result', resRouter)


module.exports = router