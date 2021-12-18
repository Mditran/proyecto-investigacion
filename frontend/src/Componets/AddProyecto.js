import React, { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc';
import {flowRight as compose} from "lodash"
import {addProyecto, allProjects} from '../Queries/Queries'




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
                leadername: "this.state.leadername",
                leaderid: "this.state.leaderid",
                image: "https://picsum.photos/700/400?random"+{random},
            },
            refetchQueries: [{quey: allProjects}]
        })
        this.cancelCourse()
    }

    cancelCourse(){
        this.name.value="";
        this.obgeneral.value="";
        this.obspecific.value="";
        this.budget.value="";
        this.startdate.value="";
        this.enddate.value="";
    }

    render() {
        return (

            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <div className="card px-1 py-4">
                    <div className="card-body">
                        <h6 className="card-title mb-3">Creacion de proyectos</h6>
                        <h6 className="information mt-4">Lider </h6>
                        <form onSubmit={this.submitProyecto}>
                            <div class="input-group  mb-3">
                                <input class="form-control"  disabled />
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-id-card" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Nombre del Proyecto" onChange={(e) => this.setState({projectname: e.target.value})} />
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-folders"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <textarea class="form-control" aria-label="With textarea" placeholder='Objetivos generales' onChange={(e) => this.setState({general: e.target.value})}></textarea>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <textarea class="form-control" aria-label="With textarea" placeholder='Objetivos especificos' onChange={(e) => this.setState({specific: e.target.value})}></textarea>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-check-square" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Presupuesto" onChange={(e) => this.setState({budget: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="date" class="form-control" onChange={(e) => this.setState({startdate: e.target.value})} />
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-play" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="date" class="form-control" onChange={(e) => this.setState({enddate: e.target.value})}/>
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
    graphql(allProjects, {name: "allProjects"})
)(AddProyecto)