const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const Customer = require('./models/customer')

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Welcome to the CRM');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  
  console.log('exiting')
  // Close our app, bringing us back to the command line.
  process.exit();
};

connect()

const runQueries = async () => {

    while (true){
        let userInput = prompt(`What would you like to do?
        
        1. Create a customer
        2. View all customers
        3. Update a customer
        4. Delete a customer
        5. Quit
        
        Number of action to run: `); 
        
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
                profiles.forEach((customer) => {
                    console.log(`id: ${customer.id} -- Name: ${customer.name}, Age: ${customer.age}`)
                })
            } 
            await findProfiles()
        } 

        if (userInput === '3'){
            const updateProfile = async () => {
                const searchID = prompt('Copy and paste the id of the customer you would like to update here: ');
                const updateName = prompt('What is the customers new name? ')
                const updateAge = prompt('What is the customers new age? ')
                const update = await Customer.findByIdAndUpdate(searchID,
                    { name: updateName, age: updateAge },
                    { new: true }
                );
            };
            await updateProfile()
            console.log("Updated profile");
        }

        if (userInput === '4'){
            const deleteProfile = async () => {
                const searchID = prompt('Copy and paste the id of the customer you would like to delete here: ')
                const profile = await Customer.findByIdAndDelete(searchID)
            }
            await deleteProfile()
            console.log("Profile deleted")
        }
        
        else if (userInput === '5'){
            break
        }
    }
}
