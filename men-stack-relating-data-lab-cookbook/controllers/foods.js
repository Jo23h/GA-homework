const User = require('../models/Users.js');

// controller logic will go here - will be built later on in the lab


async function addFood(req, res) {

    // get user
    const user = await User.findOne({username: req.decoded.username})

    // add food
    user.pantry.push(req.body)

    // save
    await user.save()
    res.status(201).json(user.pantry);

}

async function getFood(req,res){
    const user = await User.findOne({username: req.decoded.username})
    return res.json(user.pantry)
}

async function deleteFood(req,res){

    try {
        const user = await User.findOne({username: req.decoded.username})
        const deleteFood = user.pantry.id(req.params.id).remove()
        await user.save()
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({error: error.message})

    }
}

async function updateFood(req,res){
    try {
        const user = await User.findOne({username: req.decoded.username})
        const food = user.pantry.id(req.params.id)
        food.set(req.body)
        await user.save()
        res.json(updateFood)
    } catch (error) {
        res.status(500).json({error: error.message})

    }
}




module.exports = {getFood, addFood, deleteFood, updateFood};