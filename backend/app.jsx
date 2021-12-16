const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
/* const movieSchema = require('./Schema/Schema') */
const projectSchema = require('./Schema/Schema')
const resolvers = require('./Resolvers/Resolver')
const cors = require('cors')



mongoose.connect('mongodb+srv://admin:admin123@cluster0.omuxj.mongodb.net/proyectoinvestigacion?retryWrites=true&w=majority', {

})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('Error', err))

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: projectSchema,
    graphiql: true,
    rootValue: resolvers
}))


app.get('/', (req, res) => {
    res.send('Hello form backend app.js')
})


app.listen(4000, ()=> {
    console.log('Server 4000');
})