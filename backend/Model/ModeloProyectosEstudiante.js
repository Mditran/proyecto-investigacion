const mongoose = require('mongoose')
const Proyecto = require('../Model/ModelProyectos')
const Usuario = require('../Model/ModelUsuarios')

const projectStudentSchema = new mongoose.Schema({
        proyecto: String,
        estudiante: String,
        startdate: String,
        enddate: String,
        state: String,
})

module.exports = new mongoose.model('ProyectosEstudiante', projectStudentSchema)
