const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
        projectname: String, 
        general: String, 
        specific: String, 
        budget: String, 
        startdate: String, 
        enddate: String, 
        leadername: String, 
        leaderid: String, 
        image: String
})

module.exports = new mongoose.model('Proyecto', projectSchema)

