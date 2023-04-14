import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Home } from "./home";
import { useNavigate } from "react-router-dom";

export const Eventos = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.evento;
    const navigate = useNavigate();

   
    function deleteTipoEvento(e) {
        e.preventDefault();
       
        //console.log("Este es el array", myArray[0].categoria)
    }
    function editTipoEvento(key) {
        // En la funcion debo recibir el parámetro del id.
        
        console.log(key)
        localStorage.setItem("id_edit", key)
    
        
        return navigate("/editar_evento");
    }
    function registerTipoEvento(e,) {
        e.preventDefault();

        return navigate("/crear_tipo_evento");
    }
    

    if (store.isAdmin) {
        return (
            <div className="container tablas_admin ">
               <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={registerTipoEvento}>Create Tipo de Evento</button> </div>
                <table className="table table-bordered">
                <thead>
                                <tr>

                                <th className="col celdas_admin">Fecha</th>
                                <th className="col celdas_admin">Fecha</th>
                                <th className="col celdas_admin">Lugar</th>
                                <th className="col celdas_admin">Precio</th>
                                <th className="col celdas_admin">Cantidad de Personas</th>

                                
                                <th className="col celdas_admin">Acciones</th>
                                </tr>
                                </thead>
                    {myArray.length === 0 ? (
                        <h1><span className="spam_no">No element in Array</span></h1>
                    ) : (
                        myArray.map((item, key=item.id) => (
                                <tbody>
                                <tr>
                                <td >{item.name}</td>
                                <td >{item.fecha}</td>
                                <td >{item.lugar}</td>
                                <td>{item.precio}</td>
                                <td>{item.cantidad_maxima_participantes}</td>
                                
                                <td>
                                        <div className="container justify-content acciones">
                                            <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={deleteTipoEvento}><i class="far fa-trash-alt"></i></button> 
                                            {/* En la función del onclick debo enviar como parámetro el valor de key */}
                                            <button type="button" class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-admin" onClick={()=>editTipoEvento(item.id)}><i class="fas fa-pencil"></i></button>
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