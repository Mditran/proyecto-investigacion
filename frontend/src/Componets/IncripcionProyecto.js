import React from 'react'

export const InscripcionProyecto = (props) => {
    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card py-2" width="500px">
            <div className="card" style={{margin: "1.0rem"}}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.projectname}</h5>
                    <h6 className="card-title">Dirigido por: {props.leadername}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <h6 className="card-title">{props.general}</h6>
                    <li className="list-group-item">{props.specific}</li>
                </ul>
                <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> 
                    <small className="agree-text">Ven y se parte de este proyecto</small>
                </div> 
                <button className="btn btn-success btn-block confirm-button">Registrarse</button>
            </div>
        </div>
    </div>
    )
}
