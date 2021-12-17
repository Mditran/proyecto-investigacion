import React from 'react'
import { useModal } from "../hooks/useModal";
import { EditarUsuario } from './EditarUsuario';
import Modal from "./Modal";


export const Usuario = (props) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    return (
                <tbody>
                    <tr>
                        <th scope="row">{props.identification}</th>
                        <td>{props.name+" "+ props.surname}</td>
                        <td>{props.email}</td>
                        <td>{props.password}</td>
                        <td>{props.rol}</td>
                        <td>{props.state}</td>
                        <td>
                            <button onClick={openModal1} type="button" className="btn btn-warning btn-sm px-3">
                                <i className="fas fa-edit"></i>
                            </button>
                            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                                <EditarUsuario  identification={props.identification}
                                    name={props.name}
                                    surname={props.surname}
                                    email={props.email}
                                    password={props.password}
                                    rol={props.rol}
                                    state={props.state}/>
                            </Modal>
                        </td>
                    </tr>
                </tbody>
    )
}
