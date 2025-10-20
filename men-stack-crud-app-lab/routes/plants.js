const express = require('express')
const router = express.Router()
const {getAllPlants, createPlant, getPlantById, updatedPlant, deletedPlant} = require('../controllers/PlantController')

router.get('/', getAllPlants)

router.post('/', createPlant)

router.get('/:id', getPlantById)

router.put('/:id', updatedPlant)

router.delete('/:id', deletedPlant)

module.exports = router 