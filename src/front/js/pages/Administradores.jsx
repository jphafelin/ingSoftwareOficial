import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Administradores = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.administradores;
    function registerAdmin(e) {
        e.preventDefault();
        const host= process.env.BACKEND_URL; // Cambiar a la URL del Front
        const url= "https://3000-jphafelin-rutgreen-b2q87zot1t2.ws-eu93.gitpod.io/register_administrador"; // Cambiar por host +"/register_administrador"
        
        return (location.href = url);
    }
    function deleteAdmin(e) {
        e.preventDefault();
        alert("Eliminado");
        console.log(item.id)
        
        
        
    }
    function editAdmin(e) {
        e.preventDefault();
        const url= "https://3000-jphafelin-rutgreen-b2q87zot1t2.ws-eu93.gitpod.io/editar_administrador"; // Cambiar por host +"/register_administrador"
        return (location.href = url);
    }
    console.log(myArray);
    console.log(myArray[0]);

    if (store.isAdmin) {
        // Está tomando el ID de la fila. Ese es el número que se le agrega a la url del fetch para eliminar. Simplemente se hace un DELETE al endpoint administradores
        return (


            <div className="container tablas_admin">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button type="button" className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={registerAdmin}>Create Admin</button> </div>
                
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
                                    <td>{item.is_active ? <i id="is_active" className="fa-solid fa-check"></i> : <i id="not_active" class="fa-solid fa-xmark"></i>}</td>
                                    <td>
                                    <div className="container justify-content acciones">
                                        <button type="button" className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={deleteAdmin2=> localStorage.setItem("id", item.id)}><i class="far fa-trash-alt"></i></button> 
                                        <button type="button" className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={editAdmin}><i class="fas fa-pencil"></i></button>
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