import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Administradores = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.administradores;
    console.log(myArray);
    console.log(myArray[0]);
    return (
        <div className="container enrolledtb">
            <table className="table table-primary table-bordered">
            <thead>
                            <tr>
                            <th className="col">Id</th>
                            <th className="col">Nombre</th>
                            <th className="col">Apellido</th>
                            <th className="col">Email</th>
                            <th className="col">Estado</th>
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
                            <td>{item.is_active?<i id="is_active" class="fa-solid fa-check"></i> : <i id="not_active" class="fa-solid fa-xmark"></i>}</td>
                            </tr>
                            </tbody>
                    ))
                )}
            </table>
        </div>
    )
}