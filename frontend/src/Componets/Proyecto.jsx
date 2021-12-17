import React from 'react'
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { InscripcionProyecto } from './IncripcionProyecto';

export const Proyecto = (props) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (

            <div className="card mb-4 m-1" style={{width: "18rem", display: "inline-block"}}>
                <img className="card-img-top" src={props.image} alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{props.projectname}</h5>
                    <p className="card-text">{props.leadername} - {props.startdate}</p>
                    <button onClick={openModal} type="button" className="btn btn-primary btn-sm px-3">
                                Ver mas...
                            </button>
                            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                                <InscripcionProyecto  
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
                                />
                            </Modal>
                </div>
            </div>
    )
}
