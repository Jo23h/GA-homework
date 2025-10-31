// routers/foods.js

const express = require("express")
const router = express.Router()
const {getFood, addFood,deleteFood, updateFood} = require('../controllers/foods')
const isSignedIn = require('../middleware/is-signed-in.js')


// routers will go here - will be built later on in the lab
router.get('/', isSignedIn, getFood)
router.post('/', isSignedIn, addFood)
router.delete('/:id', isSignedIn, deleteFood)
router.put('/:id', isSignedIn, updateFood)

        
module.exports = router;
        
