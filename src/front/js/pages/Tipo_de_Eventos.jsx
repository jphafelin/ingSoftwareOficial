import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Tipo_de_Eventos = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.tipo_evento;
    console.log(myArray);
    console.log(myArray[0]);

    if (store.isAdmin) {
    return (
        <div className="container tablas_admin ">
           <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin">Create Monitor</button> </div>
            <table className="table table-bordered">
            <thead>
                            <tr>
                            
                            <th className="col">Nombre</th>
                            <th className="col">Descripción</th>
                            <th className="col">Dificultad</th>
                            <th className="col">Categoría</th>
                            <th className="col">Acciones</th>
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
                                        <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin"><i class="far fa-trash-alt"></i></button> 
                                        <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin"><i class="fas fa-pencil"></i></button>
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