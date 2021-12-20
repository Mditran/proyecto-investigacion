import React, { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc';
import {allProjects} from '../Queries/Queries'
import { ProyectoLider } from './../Componets/ProyectoLider';


class ListaProyectosLider extends Component {

    render() {
        console.log(this.props);
        let data =  this.props.data
        if(data.loading){
            return <h2>We are loading the projects</h2>
        }
        console.log("Noooooo", data.projects);

        if(data.projects.length === 0){
            return <h2>Wo hay ningun proyecto</h2>
        }
        return (
            <div>
                {data.projects.map((project) => {
                    if(project.leaderid === "1144099580")
                        return <ProyectoLider key = {project.projectname}
                            _id = {project._id}
                            projectname  = {project.projectname}
                            general  = {project.general}
                            specific  = {project.specific}
                            budget  = {project.budget}
                            startdate  = {project.startdate}
                            enddate  = {project.enddate}
                            leadername  = {project.leadername}
                            leaderid  = {project.leaderid}
                            definite  = {project.definite}
                            state  = {project.state}
                            fase  = {project.fase}
                            image = {project.image}
                            />
                        return null
                })}
            </div>
        )
    }
}


export default graphql(allProjects)(ListaProyectosLider)