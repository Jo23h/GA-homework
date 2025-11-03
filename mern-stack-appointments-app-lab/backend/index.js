require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./db/db'); 
const appointmentRouter = require('./routers/appointments'); 
const cors = require('cors');

connectDB()

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/appointments', appointmentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});