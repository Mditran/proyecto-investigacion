import React, { Component } from 'react'
import {allProjects} from '../Queries/Queries'
import { graphql } from '@apollo/client/react/hoc';
import { ProyectoRegistrado } from './../Componets/ProyectoRegistrado';





class ListaProyectosRegistrados extends Component {

    render() {
        let data =  this.props.data
        if(data.loading){
            return <h2>We are loading the projects</h2>
        }
        if(data.projects.length === 0){
            console.log('Errork');
            return <h2>Wo hay ningun proyecto</h2>
        }
        return (
            <div>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Proyecto</th>
                            <th scope="col">Lider</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">O. generales</th>
                            <th scope="col">O. especificos</th>
                            <th scope="col">Presupuesto</th>
                            <th scope="col">Fecha de inicio</th>
                            <th scope="col">Fecha de cierre</th>
                            <th scope="col">Definicion</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fase</th>
                        </tr>
                    </thead>
                    {data.projects.map((project) => {
                        return <ProyectoRegistrado key = {project._id}
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
                    })}
                </table>
            </div>
        )
    }
}


export default graphql(allProjects)(ListaProyectosRegistrados)