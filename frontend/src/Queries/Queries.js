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



const addProyecto = gql`
    mutation AddProyecto($projectname: String!, $general: String!, $specific: String!, $budget: String!, $startdate: String!, $enddate: String!, $leadername: String!, $leaderid: String!, $image: String!){
        
        addProyecto(projectname: $projectname, general: $general, specific: $specific, budget: $budget, startdate: $startdate, enddate: $enddate, leadername: $leadername, leaderid: $leaderid, image: $image){

            projectname
            general
            specific
            budget
            startdate
            enddate
            leadername
            leaderid
            image
        }
    }
`

export {allProjects, allUsers, allUsersByRol, addProyecto}