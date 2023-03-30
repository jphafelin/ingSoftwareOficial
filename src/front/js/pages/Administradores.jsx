import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Administradores = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.administradores;
    console.log(myArray);
    console.log(myArray[0]);

    if (store.isAdmin) {
        return (


            <div className="container tablas_admin">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin">Create Admin</button> </div>
                
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="col">Id</th>
                            <th className="col">Nombre</th>
                            <th className="col">Apellido</th>
                            <th className="col">Email</th>
                            <th className="col">Estado</th>
                            <th className="col">Acciones</th>
                        </tr>
                    </thead>
                    {myArray.length === 0 ? (
                        <h1><span className="spam_no">No element in Array</span></h1>
                    ) : (
                        myArray.map((item) => (
                            <tbody>
                                <tr>
                                    <td >{item.id}</td>
                                    <td>{item.name}</td>
                                    <td >{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.is_active ? <i id="is_active" class="fa-solid fa-check"></i> : <i id="not_active" class="fa-solid fa-xmark"></i>}</td>
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