import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Home } from "./home";
import { useNavigate } from "react-router-dom"

export const Monitor = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.monitores;
    const navigate = useNavigate();


    function deleteMonitor(e) {
        e.preventDefault();
        alert("Desarrollar funcionalidad");
    }
    function editMonitor(key, user) {
        console.log(key)
        console.log(user)
        localStorage.setItem("id_edit", key)
        localStorage.setItem("id_user_edit", user)

        return navigate("/editar_monitor");
        
    }
    function registerMonitor(e) {
        e.preventDefault();
    
        return navigate("/register_monitor");
    }
    
    
    if (store.isAdmin) {
       
    return (
        <div className="container tablas_admin ">
           <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={registerMonitor}>Create Monitor</button> </div>
            <table className="table table-bordered">
            <thead>
                            <tr>
                            <th className="col">Id</th>
                            <th className="col">Id_User</th>
                            <th className="col">Nombre</th>
                            <th className="col">Apellido</th>
                            <th className="col">e-mail</th>
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
                            <td >{item.id_user}</td>
                            <td>{item.name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                    <div className="container justify-content acciones">
                                        <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={deleteMonitor} ><i class="far fa-trash-alt"></i></button> 
                                        <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={()=>editMonitor(item.id, item.id_user)}><i class="fas fa-pencil"></i></button>
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