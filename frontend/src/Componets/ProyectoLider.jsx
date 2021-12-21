import React from 'react'
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";/* 
import { InscripcionProyecto } from './IncripcionProyecto'; */
import EditarProyectoLider from './EditarProyectoLider';

export const ProyectoLider = (props) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (

            <div className="card mb-4 m-1" style={{width: "18rem", display: "inline-block"}}>
                <img className="card-img-top" src={props.image} alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{props.projectname}</h5>
                    <h5 className="card-title">Estado: {props.state}</h5>
                    <p className="card-text">{props.leadername} - {props.startdate}</p>
                    <div>
                        <button onClick={openModal} type="button" className="btn btn-info btn-sm px-3 m-3">
                                    Ver mas...
                        </button>
                    </div>
                    
                            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                                <EditarProyectoLider  
                                    _id = {props._id}
                                    projectname  = {props.projectname}
                                    general  = {props.general}
                                    specific  = {props.specific}
                                    budget  = {props.budget}
                                    startdate  = {props.startdate}
                                    enddate  = {props.enddate}
                                    leadername  = {props.leadername}
                                    leaderid  = {props.leaderid}
                                    image  = {props.image}
                                    definite = {props.definite}
                                    state = {props.state}
                                    fase = {props.fase}
                                />
                            </Modal>
                            <div>
                            {(props.state === "Activo")? <button onClick={openModal} type="button" className="btn btn-warning btn-sm px-3 m-3">
                                Actualizar
                        </button> : null}
                                <button onClick={openModal} type="button" className="btn btn-success btn-sm px-3">
                                    Ver avances
                                </button>
                            </div>
                            
                </div>
            </div>
    )
}
