import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Home } from "./home";
import { useNavigate } from "react-router-dom"


export const Administradores = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.administradores;
    const navigate = useNavigate();

    function registerAdmin(e) {
        e.preventDefault();

        return navigate("/register_administrador");
    }
    function deleteAdmin(e) {
        e.preventDefault();
        alert("Eliminado");
        console.log(item.id)
        
        
        
    }
    function editAdmin(key, user) {
        console.log(key)
        console.log(user)
        localStorage.setItem("id_edit", key)
        localStorage.setItem("id_user_edit", user)

        return navigate("/editar_administrador");
    }
   

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
                       <div>
                       <h1><span className="spam_no">No element in Array</span></h1>
                       </div>
                    ) : (
                        myArray.map((item, key=item.id, user=item.id_user) => (
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
                                        <button type="button" className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={()=>editAdmin(item.id, item.id_user)}><i class="fas fa-pencil"></i></button>
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