const express = require('express')
const app = express()

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose')
// Without calling a specific file, JS will call index.js file in the folder as the default file
const router = require('./routes') 

const PORT = process.env.port || 3000

app.use(express.json());
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error', err))
app.use('/', router)

// Any routes will use express.json
// app.use(express.json())

// const connect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log('MDB is a go');
//     } catch (error) {
//         console.error('MDB error', error)
//     }

//     app.use('/', router)
// };

// connect()

// mongoose.connect(process.env.MONGODB_URI)
//      .then(()=> console.log('MongoDB connected'))
//      .catch(err=>console.error ('MongoBD connection error:', err))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

