const {buildSchema} = require('graphql');

const projectSchema = buildSchema(`
    type Query{
        projects: [Proyecto]
        projectByName(name: String!): Proyecto
        users: [Usuario]
        usersByID(_id: ID!): Usuario

        userLogin(email: String!, password: String!): Usuario
    }

    type Mutation{
        addProyecto(projectname: String!, general: String!, specific: String!, budget: String!, startdate: String!, enddate: String!, leadername: String!, leaderid: String!, state: String!, fase: String! image: String!): Proyecto
        
        addUsuario(identification: String!, name: String!, surname: String!, email: String!, password: String!, rol: String!, state: String!): Usuario
        updateUser(_id: ID!, identification: String!, name: String!, surname: String!, email: String!, password: String!, rol: String!, state: String!): Usuario!
    }
    type Proyecto{
        _id: ID,
        projectname: String!, 
        general: String!, 
        specific: String!, 
        budget: String!, 
        startdate: String!, 
        enddate: String!, 
        leadername: String!, 
        leaderid: String!, 
        state: String!, 
        fase: String!,
        image: String!
    }

    type Usuario{
        _id: ID!,
        identification: String,
        name: String,
        surname: String,
        email: String,
        password: String,
        rol: String!,
        state: String,
    }
`);

module.exports = projectSchema

