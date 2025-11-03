const Appointment = require('../models/appointment');

async function getAllAppointments(req,res){
    try {
       const appointments = await Appointment.find();
       return res.json(appointments);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

async function getSpecificAppointment(req,res){
    try {
       const appointment = await Appointment.findById(req.params.id);
       if (!appointment) {
        return res.status(404).json({error: 'Appointment not found'});
       } 
       return res.json(appointment);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

async function createAppointment(req,res){
    try{
        const newAppointment = await Appointment.create(req.body);
        return res.status(201).json(newAppointment);

    } catch (error){
        res.status(400).json({error: error.message});
    }
}

async function updateAppointment(req,res){
    try{
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true });
        if (appointment) {
            res.json(appointment); 
        } else {
            res.status(404).json('Appointment not found');
        }
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

async function deleteAppointment(req,res){
    try{
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (appointment){
            res.sendStatus(204);
        }
    } catch(error){
         res.status(500).json({error: error.message});
    }
}

module.exports={
    getAllAppointments,
    getSpecificAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment
}