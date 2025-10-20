const Plant = require('../models/plant')

async function getAllPlants(req,res) {
    const plants = await Plant.find()
    // if there is an error, we will return an error. without return the error details won't bubble up
    return res.json(plants)
}

async function createPlant(req,res){
    const {name, description} = req.body;
        if(!name || !description){
            return res.status(400).send('Name and description are required')
        }
    const newPlant = await Plant.create({name, description})
    return res.status(201).json(newPlant)

    // const newPlant = await Plant.create(req.body)
    // res.status(201).json(newPlant)
}

async function getPlantById(req,res){
    const plant = await Plant.findById(req.params.id)
    if (plant){
        res.json(plant)
    } else{
        res.status(404).send('Plant not found')
    }
}

async function updatedPlant(req,res) {
    // {new: true} controls which version of the document gets returned.
    // By default, Mongoose returns the original document before it was updated.
    // This returns the updated document with all the new values.
    // Note: The database is updated in both cases - this only affects what gets returned!
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (updatedPlant) {
        res.json(updatedPlant)
    } else {
        res.status(404).send('Plant not found')
    }
}

async function deletedPlant(req,res) {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
    if (deletedPlant) {
        res.sendStatus(204)
    } else {
        res.status(404).send('Plant not found')
    } 
}

module.exports={
    getAllPlants,
    createPlant,
    getPlantById,
    updatedPlant,
    deletedPlant
}