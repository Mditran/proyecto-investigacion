const Proyecto = require('../Model/Model')


const resolvers = {
    projects: () => {
        //Encuntra todos los proyectos
        return Proyecto.find({});
    },

    projectByName: (args) => {
        return Proyecto.findOne({name: args.name})
    },

    addProyecto: (args) => {
        let proyecto = new Proyecto({
            name: args.name,
            tipo: args.tipo,
            fecha: args.fecha,
            image: args.image,
        })
        proyecto.save()
        return proyecto
    }
};

module.exports = resolvers;
