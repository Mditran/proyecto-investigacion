const Proyecto = require('../Model/ModelProyectos')
const Usuario = require('../Model/ModelUsuarios')
const ProyectosEstudiante = require('../Model/ModeloProyectosEstudiante')


const resolvers = {
    projects: () => {
        //Encuntra todos los proyectos
        return Proyecto.find({});
    },

    usersByID: (args) => {
        //Encuntra los usuarios con rol estudiante
        return Usuario.findById({_id: args._id});
    },

    userLogin: (args) => {
        //Encuntra los usuarios con rol estudiante
        return Usuario.findOne({email: args.email, password: args.password});
    },

    users: () => {
        //Encuntra todos los proyectos
        return Usuario.find({});
    },

    updateUser: async(args) => {
            let result= await Usuario.findByIdAndUpdate(args._id , {"$set": {
                identification: args.identification,
                name: args.name,
                surname: args.surname,
                email: args.email,
                password: args.password,
                rol: args.rol,
                state: args.state,
            }})
                return result._doc 
    },

    updateProyecto: async(args) => {
        let result= await Proyecto.findByIdAndUpdate(args._id , {"$set": {

                        projectname: args.projectname,
                        general: args.general,
                        specific: args.specific,
                        budget: args.budget,
                        startdate: args.startdate,
                        enddate: args.enddate,
                        leadername: args.leadername,
                        leaderid: args.leaderid,
                        definite: args.definite,
                        state: args.state,
                        fase: args.fase,
        }})
            return result._doc 
},

    updateProyectoLider: async(args) => {
        let result= await Proyecto.findByIdAndUpdate(args._id , {"$set": {

                        projectname: args.projectname,
                        general: args.general,
                        specific: args.specific,
                        budget: args.budget,
        }})
            return result._doc 
    },

    
    projectByName: (args) => {
        return Proyecto.findOne({name: args.name})
    },

    addUsuario: (args) => {
        let usuario = new Usuario({
            
            identification: args.identification,
            name: args.name,
            surname: args.surname,
            email: args.email,
            password: args.password,
            rol: args.rol,
            state: args.state,
        })
        usuario.save()
        return usuario
    },

    addProyecto: (args) => {
        let proyecto = new Proyecto({
            projectname: args.projectname,
            general: args.general,
            specific: args.specific,
            budget: args.budget,
            startdate: args.startdate,
            enddate: args.enddate,
            leadername: args.leadername,
            leaderid: args.leaderid,
            definite: args.definite,
            state: args.state,
            fase: args.fase,
            image: args.image,
        })
        proyecto.save()
        return proyecto
    },

    projectsStudent: () => {
        //Encuntra todos los proyectos
        return ProyectosEstudiante.find({});
    },

    ProyectoEstudiante:{
        proyecto: ({Proyecto}) => {
            return projects.findById({_id: "61bbf631b0d2d44dbd4697de"})
        }
    },

    ProyectoEstudiante:{
        estudiante: ({Usuario}) => {
            return users.findById({_id: "61c01cc2993319c9ac2de1f3"})
        }
    }

};

module.exports = resolvers;
