const mongoose = require('mongoose')

const usertSchema = new mongoose.Schema({
    
    identification: String,
    name: String,
    surname: String,
    email: String,
    password: String,
    rol: String,
    state: String,
})

module.exports = new mongoose.model('Usuario', usertSchema)