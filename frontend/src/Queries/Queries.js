import { gql } from "@apollo/client";

const allProjects = gql`
    {
        projects{
            
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

export {allProjects, addProyecto}