import { gql } from "@apollo/client";

const allProjects = gql`
    {
        projects{
            _id
            projectname 
            general 
            specific 
            budget 
            startdate 
            enddate 
            leadername 
            leaderid
            definite
            state
            fase
            image
        }
    }
`

const allUsers = gql`
    {
        users{
            _id
            identification
            name
            surname
            email
            password
            rol
            state
        }
    }
`

const allUsersByRol = gql`
    {
        usersByRol(rol: "Estudiante"){
            identification
            name
            surname
            email
            password
            rol
            state
        }
    }
`

const userLogin = gql`
    query UserLogin($email: Stirng!, $password: String!){
        userLogin(email: $email, password: $password){
            identification
            name
            surname
            email
            password
            rol
            state
        }
    }
`



const addProyecto = gql`
    mutation AddProyecto($projectname: String!, $general: String!, $specific: String!, $budget: String!, $startdate: String!, $enddate: String!, $leadername: String!, $leaderid: String!, $definite: String!, $state: String!, $fase: String!, $image: String!){
        
        addProyecto(projectname: $projectname, general: $general, specific: $specific, budget: $budget, startdate: $startdate, enddate: $enddate, leadername: $leadername, leaderid: $leaderid, definite: $definite, state: $state, fase: $fase, image: $image){

            projectname
            general
            specific
            budget
            startdate
            enddate
            leadername
            leaderid
            definite
            state
            fase
            image
        }
    }
`

export {allProjects, allUsers, allUsersByRol, addProyecto, userLogin}