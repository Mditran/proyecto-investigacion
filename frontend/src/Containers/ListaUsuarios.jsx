import React, { Component } from 'react'
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';
import { Usuario } from './../Componets/Usuario';


const allUsers = gql`
    {
        users{
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


class ListaUsuarios extends Component {

    render() {
        console.log(this.props);
        let data = this.props.data
        if (data.loading) {
            return <h2>We are loading the users</h2>
        }
        if (data.users.length === 0) {
            return <h2>Wo hay ningun Usuario</h2>
        }
        return (
            <div>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Identificacion</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    {data.users.map((user) => {
                        return <Usuario key={user.identification}
                            identification={user.identification}
                            name={user.name}
                            surname={user.surname}
                            email={user.email}
                            password={user.password}
                            rol={user.rol}
                            state={user.state}
                        />
                    })}
                </table>
            </div>
        )
    }
}


export default graphql(allUsers)(ListaUsuarios)