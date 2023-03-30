import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Tipo_de_Eventos = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.tipo_evento;
    function deleteTipoEvento(e) {
        e.preventDefault();
        alert("Desarrollar funcionalidad");
    }
    function editTipoEvento(e) {
        e.preventDefault();
        alert("Desarrollar funcionalidad");
    }
    function registerTipoEvento(e) {
        e.preventDefault();
        alert("Desarrollar funcionalidad");
    }
    console.log(myArray);
    console.log(myArray[0]);

    if (store.isAdmin) {
    return (
        <div className="container tablas_admin ">
           <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={registerTipoEvento}>Create Tipo de Evento</button> </div>
            <table className="table table-bordered">
            <thead>
                            <tr>
                            
                            <th className="col celdas_admin">Nombre</th>
                            <th className="col celdas_admin">Descripción</th>
                            <th className="col celdas_admin">Dificultad</th>
                            <th className="col celdas_admin">Categoría</th>
                            <th className="col celdas_admin">Acciones</th>
                            </tr>
                            </thead>
                {myArray.length === 0 ? (
                    <h1><span className="spam_no">No element in Array</span></h1>
                ) : (
                    myArray.map((item) => (
                            <tbody>
                            <tr>
                            <td >{item.name}</td>
                            <td >{item.descripcion}</td>
                            <td>{item.dificultad}</td>
                            <td>{item.categoria}</td>
                            <td>
                                    <div className="container justify-content acciones">
                                        <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={deleteTipoEvento}><i class="far fa-trash-alt"></i></button> 
                                        <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={editTipoEvento}><i class="fas fa-pencil"></i></button>
                                    </div> 
                                    </td>
                            </tr>
                            </tbody>
                    ))
                )}
            </table>
        </div>
    )
}
    else {
        return (
           <Home />
        )
    }

}