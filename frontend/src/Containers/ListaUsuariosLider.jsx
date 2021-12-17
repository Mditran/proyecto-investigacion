import React, { Component } from 'react'
import {allUsers} from '../Queries/Queries'
import { graphql } from '@apollo/client/react/hoc';
import { Usuario } from './../Componets/Usuario';


class ListaUsuariosLider extends Component {

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
                        if(user.rol === "Estudiante")
                            return <Usuario key={user.identification}
                                identification={user.identification}
                                name={user.name}
                                surname={user.surname}
                                email={user.email}
                                password={user.password}
                                rol={user.rol}
                                state={user.state}
                            />
                        return null
                    })}
                </table>
            </div>
        )
    }
}


export default graphql(allUsers)(ListaUsuariosLider)