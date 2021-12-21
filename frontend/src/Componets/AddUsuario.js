import React, { Component } from 'react'
import { gql } from "@apollo/client"
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from "lodash"

const addUsuario = gql`
    mutation AddUsuario($identification: String!, $name: String!, $surname: String!, $email: String!, $password: String!, $rol: String!, $state: String!){
        
        addUsuario(identification: $identification, name: $name, surname: $surname, email: $email, password: $password, rol: $rol, state: $state){

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



class AddUsuario extends Component {

    state = {
        identification: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        rol: '',
        state: '',
    }

    submitUsuario = (event) => {
        event.preventDefault()
        this.props.addUsuario({
            variables: {
                identification: this.state.identification,
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                password: this.state.password,
                rol: this.state.rol,
                state: "Pendiente",
            }
        })
        alert('Usuario Creado')
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
                        <h6 className="card-title mb-3">Creacion de Usuarios</h6>
                        <form onSubmit={this.submitUsuario}  id="create-course-form">
                            <div className="input-group  mb-3">
                                <input type="text" className="form-control" placeholder='Identificacion' onChange={(e) => this.setState({identification: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-id-card" aria-hidden="true"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <input type="text" className="form-control" placeholder="Nombre" onChange={(e) => this.setState({name: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>

                            </div>
                            <div className="input-group  mb-3">
                                <input type="text" className="form-control" placeholder="Apellido" onChange={(e) => this.setState({surname: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>

                            </div>
                            <div className="input-group  mb-3">
                                <input type="email" className="form-control" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" onChange={(e) => this.setState({password: e.target.value})}/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                            </div>
                            <div className="input-group  mb-3">
                                <select className="form-select form-select-lg mb-3" onChange={(e) => this.setState({rol: e.target.value})} id="inputGroupSelect02">
                                    <option value=""></option>
                                    <option value="Estudiante">Estudiante</option>
                                    <option value="Lider">Lider</option>
                                    <option value="Administrador">Administrador</option>
                                </select>
                            </div>
                            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                                <small className="agree-text">Esta seguro que los datos estan correctos?</small>
                            </div>
                            <button className="btn btn-primary btn-block confirm-button">Crear cuenta</button>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}


export default compose(
    graphql(addUsuario, { name: "addUsuario" })
)
    (AddUsuario)