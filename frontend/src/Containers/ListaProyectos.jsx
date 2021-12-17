import React, { Component } from 'react'
import { Proyecto } from '../Componets/Proyecto'
import { graphql } from '@apollo/client/react/hoc';
import {allProjects} from '../Queries/Queries'


class ListaProyectos extends Component {

    render() {
        console.log(this.props);
        let data =  this.props.data
        if(data.loading){
            return <h2>We are loading the projects</h2>
        }
        if(data.projects.length === 0){
            return <h2>Wo hay ningun proyecto</h2>
        }
        return (
            <div>
                {data.projects.map((project) => {
                    return <Proyecto key = {project.projectname}
                        _id = {project._id}
                        projectname  = {project.projectname}
                        general  = {project.general}
                        specific  = {project.specific}
                        budget  = {project.budget}
                        startdate  = {project.startdate}
                        enddate  = {project.enddate}
                        leadername  = {project.leadername}
                        leaderid  = {project.leaderid}
                        image = {project.image}
                        />
                })}
            </div>
        )
    }
}


export default graphql(allProjects)(ListaProyectos)