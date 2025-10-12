const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const Customer = require('./models/customer')

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

connect()

const runQueries = async () => {
    let userInput = prompt(`Welcome to the CRM
        
    What would you like to do?
    
    1. Create a customer
    2. View all customers
    3. Update a customer
    4. Delete a customer
    5. Quit
    
    Number of action to run: `);
    console.log(userInput)  
    
    if (userInput === '1'){
    const name = prompt(`What's your name: `)
    const age = prompt(`Age: `)

    const createProfile = async () => {
        await Customer.create({
            name: name,
            age: age
        })
    }
    await createProfile()
    console.log(`Welcome ${name}!`) 
    }

    if (userInput === '2'){

        const findProfiles = async () => {
            const profiles = await Customer.find({})
            console.log(profiles)
        } 
        await findProfiles()
    }

    if (userInput === '3'){

        

    }


}
