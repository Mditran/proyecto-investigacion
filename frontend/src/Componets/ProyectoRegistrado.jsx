import React from 'react'
import { useModal } from "../hooks/useModal";
import EditarProyecto from './EditarProyecto';
import Modal from "./Modal";


export const ProyectoRegistrado = (props) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (
                <tbody>
                    <tr>
                        <th scope="row">{props.projectname}</th>
                        <td>{props.leadername}</td>
                        <td>{props.leaderid}</td>
                        <td>{props.general}</td>
                        <td>{props.specific}</td>
                        <td>{props.budget}</td>
                        <td>{props.startdate}</td>
                        <td>{props.enddate}</td>
                        <td>{props.definite}</td>
                        <td>{props.state}</td>
                        <td>{props.fase}</td>
                        <td>
                            <button onClick={openModal} type="button" className="btn btn-warning btn-sm px-3">
                                <i className="fas fa-edit"></i>
                            </button>
                            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                                <EditarProyecto  
                                    _id={props._id}
                                    projectname = {props.projectname}
                                    leadername = {props.leadername}
                                    leaderid = {props.leaderid}
                                    general = {props.general}
                                    specific = {props.specific}
                                    budget = {props.budget}
                                    startdate = {props.startdate}
                                    enddate = {props.enddate}
                                    definite = {props.definite}
                                    state = {props.state}
                                    fase = {props.fase}/>
                            </Modal>
                        </td>
                    </tr>
                </tbody>
    )
}
