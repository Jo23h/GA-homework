const User = require('../models/Users.js');

async function getAllUsers(req, res){
    const users = await User.find().select('-password')
    return res.json(users)
}

async function getUser(req, res){
    const user = await User.findById(req.params.userId).select('-password')
    return res.json(user)
}


module.exports={getAllUsers, getUser}