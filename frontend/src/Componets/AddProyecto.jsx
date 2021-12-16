import React from 'react'

export const AddProyecto = () => {
    return (
        <div style={{backgroundColor: "lightblue", padding: "10px"}} >
            <form onSubmit={() => alert('Proyecto agregado')}>

                    <label className="form-label m-2" for="form1Example13">Nombre</label>
                    <input type="text" required />
                    
                    <label className="form-label m-2" for="form1Example23">Tipo</label>
                    <input type="text" required/>

                    <label className="form-label m-2" for="form1Example23">Fecha</label>
                    <input type="date" required/>

                    <button type='submit'  className="btn btn-success btn-lg m-4">Add Project</button>
            </form>
        </div>
    )
}
