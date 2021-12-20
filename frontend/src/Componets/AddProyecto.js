import React, { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc';
import {flowRight as compose} from "lodash"
import {addProyecto} from '../Queries/Queries'




class AddProyecto extends Component {

    state = {
        projectname: '',
        general: '',
        specific: '',
        budget: '',
        startdate: '',
        enddate: '',
        leadername: '',
        leaderid: '',
        state: '',
        fase: '',
        image: '',
    }

    submitProyecto = (event) => {
        let random = Math.random();
        event.preventDefault()
        this.props.addProyecto({
            variables:{
                projectname: this.state.projectname,
                general: this.state.general,
                specific: this.state.specific,
                budget: this.state.budget,
                startdate: this.state.startdate,
                enddate: this.state.enddate,
                leadername: this.state.leadername,
                leaderid: this.state.leaderid,
                state: "Inactivo",
                fase: "En espera",
                image: "https://picsum.photos/700/400?random"+{random},
            },
        })
        this.cancelCourse()
    }

    cancelCourse(){
        document.getElementById("create-course-form").reset();
    }

    render() {
        return (

            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <div className="card px-1 py-4">
                    <div className="card-body">
                        <h6 className="card-title mb-3">Creacion de proyectos</h6>
                        <form onSubmit={this.submitProyecto}  id="create-course-form">
                        <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Nombre" ref="leadername" onChange={(e) => this.setState({leadername: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder='Identificacion' ref="leaderid" onChange={(e) => this.setState({leaderid: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-id-card" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Nombre del Proyecto" ref="projectname" onChange={(e) => this.setState({projectname: e.target.value})} />
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-folders"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <textarea class="form-control" aria-label="With textarea" placeholder='Objetivos generales' ref="general" onChange={(e) => this.setState({general: e.target.value})}></textarea>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <textarea class="form-control" aria-label="With textarea" placeholder='Objetivos especificos' ref="specific" onChange={(e) => this.setState({specific: e.target.value})}></textarea>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-check-square" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Presupuesto" ref="budget" onChange={(e) => this.setState({budget: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="date" class="form-control" ref="startdate" onChange={(e) => this.setState({startdate: e.target.value})} />
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-play" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="date" class="form-control" ref="enddate" onChange={(e) => this.setState({enddate: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-stop" aria-hidden="true"></i></span>
                            </div>
                            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                                <small className="agree-text">Esta seguro que los datos estan correctos?</small>
                            </div>
                            <button className="btn btn-primary btn-block confirm-button">Crear Proyecto</button>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}


export default compose(
    graphql(addProyecto, {name: "addProyecto"}),
)(AddProyecto)