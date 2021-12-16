const {buildSchema} = require('graphql');

const projectSchema = buildSchema(`
    type Query{
        projects: [Proyecto]
        projectByName(name: String!): Proyecto
    }

    type Mutation{
        addProyecto(name: String!, tipo: String!, fecha: String!, image: String!): Proyecto
    }
    type Proyecto{
        name: String,
        tipo: String,
        fecha: String,
        image: String,
    }
`);

module.exports = projectSchema

