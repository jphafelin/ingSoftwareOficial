import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Monitor = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.monitores;
    function deleteMonitor(e) {
        e.preventDefault();
        alert("Desarrollar funcionalidad");
    }
    function editMonitor(e) {
        e.preventDefault();
        alert("Desarrollar funcionalidad");
    }
    function registerMonitor(e) {
        e.preventDefault();
        const host= process.env.BACKEND_URL; // Cambiar a URL de Front
        const url= "https://3000-jphafelin-rutgreen-b2q87zot1t2.ws-eu93.gitpod.io/register_monitor"; // CAmbiar a host + "register_monitor"
        return (location.href = url);
    }
    console.log(myArray);
    console.log(myArray[0]);
    
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
                    <h1><span className="spam_no">No element in Array</span></h1>
                ) : (
                    myArray.map((item) => (
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
                                        <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={editMonitor}><i class="fas fa-pencil"></i></button>
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