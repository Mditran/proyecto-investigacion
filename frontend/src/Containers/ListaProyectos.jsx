import React, { Component } from 'react'
import { Proyecto } from '../Componets/Proyecto'
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';


const allProjects = gql`
    {
        projects{
            
            name
            tipo
            fecha
            image
        }
    }
`


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
                    return <Proyecto key = {project.name}
                        name = {project.name}
                        tipo = {project.tipo}
                        fecha = {project.fecha}
                        image = {project.image}/>
                })}
            </div>
        )
    }
}


export default graphql(allProjects)(ListaProyectos)