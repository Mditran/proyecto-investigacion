
import React, {Component} from 'react'
import {flowRight as compose} from "lodash"
import { graphql } from '@apollo/client/react/hoc';
import { gql } from "@apollo/client"


const updateProyecto = gql`
    mutation EditarProyecto($_id: ID!, $projectname: String!, $general: String!, $specific: String!, $budget: String!, $startdate: String!, $enddate: String!, $leadername: String!, $leaderid: String!, $definite: String!, $state: String!, $fase: String!){
        
        updateProyecto(_id: $_id, projectname: $projectname, general: $general, specific: $specific, budget: $budget, startdate: $startdate, enddate: $enddate, leadername: $leadername,  leaderid: $leaderid, definite: $definite, state: $state, fase: $fase){
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
        }
    }
`
class EditarProyecto extends Component {


    constructor(props){
        super(props);
    
        this.state = {
            _id: props._id,
            projectname: props.projectname,
            general: props.general,
            specific: props.specific,
            budget: props.budget,
            startdate: props.startdate,
            enddate: props.enddate,
            leadername: props.leadername,
            leaderid: props.leaderid,
            definite: props.definite,
            state: props.state,
            fase: props.fase,
        }


    this.submitUsuario = (event) => {
        event.preventDefault()
        this.props.updateProyecto({
            variables: {
            _id: this.state._id,
            projectname: this.state.projectname,
            general: this.state.general,
            specific: this.state.specific,
            budget: this.state.budget,
            startdate: this.state.startdate,
            enddate: this.state.enddate,
            leadername: this.state.leadername,
            leaderid: this.state.leaderid,
            definite: this.state.definite,
            state: this.state.state,
            fase: this.state.fase,
            },
        })
        alert('Datos actualizados')
    }
    
}
    render() {
        return (
            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <div className="card px-1 py-4">
                    <div className="card-body">
                        <h6 className="card-title mb-3">Proyecto "{this.state.projectname}"</h6>
                        <h6 className="information mt-4">Actulizacion de datos</h6>
                        <form onSubmit={this.submitUsuario}>
                            <div className="input-group  mb-3">
                                <input type="text" className="form-control" placeholder="Nombre del Proyecto" value={this.state.projectname} onChange={(e) => this.setState({projectname: e.target.value})} />
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-folders"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <input type="text" className="form-control" placeholder="Nombre" value={this.state.leadername} onChange={(e) => this.setState({leadername: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className="input-group  mb-3">
                                <input type="text" className="form-control" placeholder='Identificacion' value={this.state.leaderid} onChange={(e) => this.setState({leaderid: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-id-card" aria-hidden="true"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <textarea className="form-control" aria-label="With textarea" placeholder='Objetivos generales' value={this.state.general} onChange={(e) => this.setState({general: e.target.value})}></textarea>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <textarea className="form-control" aria-label="With textarea" placeholder='Objetivos especificos' value={this.state.specific} onChange={(e) => this.setState({specific: e.target.value})}></textarea>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-check-square" aria-hidden="true"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <input type="text" className="form-control" placeholder="Presupuesto" value={this.state.budget} onChange={(e) => this.setState({budget: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-dollar-sign"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <input type="date" className="form-control" value={this.state.startdate} onChange={(e) => this.setState({startdate: e.target.value})} />
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-play" aria-hidden="true"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <input type="date" className="form-control" value={this.state.enddate} onChange={(e) => this.setState({enddate: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-stop" aria-hidden="true"></i></span>
                            </div>
                            <label htmlFor="disabledSelect" className="form-label">Definicion del proyecto</label>
                            <div className="input-group  mb-3">
                                <select className="form-select form-select-lg mb-3" onChange={(e) => this.setState({definite: e.target.value})}>
                                    <option value={this.state.definite}>{this.state.definite}</option>
                                    {(this.state.definite === "Pendiente")? "": <option value="Pendiente">Pendiente</option>}
                                    {(this.state.definite === "Aprobado")? "": <option value="Aprobado">Aprobado</option>}
                                    {(this.state.definite === "No aprobado")? "": <option value="No aprobado">No aprobado</option>}
                                </select>
                            </div>
                            <label htmlFor="disabledSelect" className="form-label">Estado del proyecto</label>
                            <div className="input-group  mb-3">
                                <select className="form-select form-select-lg mb-3" onChange={(e) => this.setState({state: e.target.value})}>
                                    <option value={this.state.state}>{this.state.state}</option>
                                    {(this.state.state === "Activo")? "": <option value="Activo">Activo</option>}
                                    {(this.state.state === "Inactivo")? "": <option value="Inactivo">Inactivo</option>}
                                </select>
                            </div>
                            <label htmlFor="disabledSelect" className="form-label">Fase del proyecto</label>
                            <div className="input-group  mb-3">
                                <select className="form-select form-select-lg mb-3" onChange={(e) => this.setState({fase: e.target.value})}>
                                    <option value={this.state.fase}>{this.state.fase}</option>
                                    {(this.state.fase === "Iniciado")? "": <option value="Iniciado">Iniciado</option>}
                                    {(this.state.fase === "En desarrollo")? "": <option value="En desarrollo">En desarrollo</option>}
                                    {(this.state.fase === "Terminado")? "": <option value="Terminado">Terminado</option>}
                                </select> 
                            </div>
                            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                                <small className="agree-text">Esta seguro que los datos estan correctos?</small>
                            </div>
                            <button className="btn btn-primary btn-block confirm-button">Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default compose(
    graphql(updateProyecto, {name: "updateProyecto"}),
)(EditarProyecto)