const express = require('express')
const router = express.Router()
const plantRouter = require('./plants')


router.use('/plants', plantRouter)
// router.use('/users', userRouter)


module.exports = router