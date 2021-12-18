
import React, {Component} from 'react'
import {flowRight as compose} from "lodash"
import { graphql } from '@apollo/client/react/hoc';
import { gql } from "@apollo/client"


const updateUser = gql`
    mutation EditarUsuario($_id: ID!, $identification: String!, $name: String!, $surname: String!, $email: String!, $password: String!, $rol: String!, $state: String!){
        
        updateUser(_id: $_id, identification: $identification, name: $name, surname: $surname, email: $email, password: $password, rol: $rol, state: $state){
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
class EditarUsuario extends Component {



/*   state = {
            identification: '987654321',
            name: 'Sofia',
            surname: 'Beltran',
            email: 'sofi234@hotmail.com',
            password: 'sofia098',
            rol: 'Lider',
            state: 'No autorizado',
    } */
    constructor(props){
        super(props);
    
        this.state = {
            _id: props._id,
            identification: props.identification,
            name: props.name,
            surname: props.surname,
            email: props.email,
            password: props.password,
            rol: props.rol,
            state: props.state,
        }


    this.submitUsuario = (event) => {
        event.preventDefault()
        console.log("----"+this.state.state);
        this.props.updateUser({
            variables: {
                _id: this.state._id,
                identification: this.state.identification,
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                password: this.state.password,
                rol: this.state.rol,
                state: this.state.state,
            },
        })
        
    }
}
    render() {
        return (
            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <div className="card px-1 py-4">
                    <div className="card-body">
                        <h6 className="card-title mb-3">Datos de {this.state.name}</h6>
                        <h6 className="information mt-4">Actulizacion de datos</h6>
                        <form onSubmit={this.submitUsuario}>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" value={this.state.identification} onChange={(e) => this.setState({identification: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-id-card" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Nombre" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Apellido" value={this.state.surname} onChange={(e) => this.setState({surname: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Contraseña" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input class="form-control" disabled value={this.state.rol}/>
                            </div>
                            <div class="input-group  mb-3">
                                <select className="form-select form-select-lg mb-3" onChange={(e) => this.setState({state: e.target.value})} id="inputGroupSelect02">
                                    <option selected>{this.state.state}</option>
                                    {(this.state.state === "Pendiente")? "": <option value="Pendiente">Pendiente</option>}
                                    {(this.state.state === "Autorizado")? "": <option value="Autorizado">Autorizado</option>}
                                    {(this.state.state === "No autorizado")? "": <option value="No autorizado">No autorizado</option>}
                                
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
    graphql(updateUser, {name: "updateUser"}),
)(EditarUsuario)