const express = require("express");
const router = express.Router();
const {createAppointment,getSpecificAppointment,getAllAppointments, updateAppointment, deleteAppointment} = require('../controllers/appointments');


router.post('/', createAppointment);
router.get('/', getAllAppointments);
router.get('/:id', getSpecificAppointment);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;