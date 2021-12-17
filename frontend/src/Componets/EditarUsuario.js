import React from 'react'

export const EditarUsuario = (props) => {
    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
            <div className="card-body">
                <h6 className="card-title mb-3">Datos de {props.name}</h6>
                <h6 className="information mt-4">Actulizacion de datos</h6>

                <div class="input-group  mb-3">
                    <input type="text" class="form-control" value={props.identification}/>
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-id-card" aria-hidden="true"></i></span>
                </div>
                <div class="input-group  mb-3">
                    <input type="text" class="form-control" placeholder="Nombre" value={props.name+" "+props.surname}/>
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>

                </div>
                <div class="input-group  mb-3">
                    <input type="email" class="form-control" placeholder="Email" value={props.email}/>
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                </div>
                <div class="input-group  mb-3">
                    <input type="text" class="form-control" placeholder="Contraseña" value={props.password}/>
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                </div>
                <div class="input-group  mb-3">
                    <input class="form-control" value={props.rol} disabled/>
                </div>

                <div className="input-group mb-3">
                    <select className="form-select form-select-lg mb-3" id="inputGroupSelect02">
                        <option selected>{props.state}</option>
                        {(props.state==='Pendiente') ? "":<option value="Pendiente">Pendiente</option>}
                        {(props.state==='Autorizado') ? "": <option value="Autorizado">Autorizado</option>}
                        {(props.state==='No autorizado') ? "" : <option value="No autorizado">No autorizado</option>}
                    </select>

                </div>

                <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> 
                    <small className="agree-text">Esta seguro que los datos estan correctos?</small>
                </div> 
                <button className="btn btn-primary btn-block confirm-button">Actualizar</button>
            </div>
        </div>
    </div>
    )
}
