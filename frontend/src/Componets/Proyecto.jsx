import React from 'react'
/* import { Col, Row } from 'react-bootstrap' */

export const Proyecto = (props) => {
    return (

            <div className="card mb-4 m-1" style={{width: "18rem", display: "inline-block"}}>
                <img className="card-img-top" src={props.image} alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.tipo} - {props.fecha}</p>
                    <a href="/" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
    )
}
