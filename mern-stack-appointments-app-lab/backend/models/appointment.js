const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    title: String,
    type: String,
    purpose: String,
    company: String,
    person: String,
    address: String,
    dateTime: Date,  
    comments: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment; 

