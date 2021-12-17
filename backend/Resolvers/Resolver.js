const Proyecto = require('../Model/ModelProyectos')
const Usuario = require('../Model/ModelUsuarios')


const resolvers = {
    projects: () => {
        //Encuntra todos los proyectos
        return Proyecto.find({});
    },

    usersByLogin: (args) => {
        //Encuntra los usuarios con rol estudiante
        return Usuario.findOne({rol: args.rol});
    },

    users: () => {
        //Encuntra todos los proyectos
        return Usuario.find({});
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

    updateUsuario: (args) => {
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
            image: args.image,
        })
        proyecto.save()
        return proyecto
    }
};

module.exports = resolvers;
