const express = require("express")
const router = express.Router()
const {getAllUsers, getUser} = require('../controllers/users')
const isSignedIn = require('../middleware/is-signed-in.js')

router.get('/', isSignedIn, getAllUsers)
router.get('/:id', isSignedIn, getUser)

module.exports = router