const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: String,
    tipo: String,
    fecha: String,
    image: String,
})

module.exports = new mongoose.model('Proyecto', projectSchema)