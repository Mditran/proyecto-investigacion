
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
            name: props.name,
            super: props.surname,
        }


    this.submitUsuario = (event) => {
        event.preventDefault()
        console.log(props.updateUser);
        this.props.updateUser({
            variables: {
                _id: props._id,
                identification: '987654321',
                name: 'Sofia',
                surname: 'Beltran',
                email: 'sofi234@hotmail.com',
                password: 'sofia098',
                rol: 'Lider',
                state: 'No autorizado',
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
                                {console.log("====",this.state.surname)}
                                <input type="text" class="form-control" placeholder={this.state.surname}/>
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-id-card" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Nombre" />
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>

                            </div>
                            <div class="input-group  mb-3">
                                <input type="email" class="form-control" placeholder="Email" />
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input type="text" class="form-control" placeholder="Contraseña" />
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                            </div>
                            <div class="input-group  mb-3">
                                <input class="form-control" disabled />
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