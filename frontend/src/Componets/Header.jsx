import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" aria-current="page" exact to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/listaProyectos">Proyectos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  exact to="/addProyecto">Agregar proyecto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  exact to="/listaUsuarios">Ver usuarios</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link"  exact to="/listaUsuariosLider">Ver usuarios Lider</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
