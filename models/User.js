const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    URLpic: String,
    country: Array

  
})

const User = mongoose.model('user', userSchema)

module.exports = User