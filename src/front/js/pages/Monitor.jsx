import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Monitor = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.monitores;
    console.log(myArray);
    console.log(myArray[0]);
    return (
        <div className="container enrolledtb">
            <table className="table table-primary table-bordered">
            <thead>
                            <tr>
                            <th className="col">Id</th>
                            <th className="col">Id_User</th>
                            <th className="col">Nombre</th>
                            <th className="col">Apellido</th>
                            <th className="col">e-mail</th>
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
                            </tr>
                            </tbody>
                    ))
                )}
            </table>
        </div>
    )
}