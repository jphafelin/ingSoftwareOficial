import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Enrolled } from "./Enrolled.jsx"

export const EventosSenderismo = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.evento;
    



    function Registrate(e) {
        e.preventDefault();
        alert("Desarrollar funcionalidad");
    }
    if (store.isAdmin) {
        return (
            <Enrolled />
        )
    }
    else {
        return (
            <div className="container-fluid d-flex divEventos">
                <div className="container-fluid justify-content-evenly mx-md-4 mt-2 mb-2 divCategorias">SENDERISMO</div>
                <div className="row justify-content-evenly mx-md-4 mt-2 mb-2">
                    {myArray.map((valor) => (
                        
                            <div className="col-sm-6">
                                <div className="card" key={valor.id_tipo}>
                                    <img src={valor.url_imagen} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{valor.name}</h5>
                                        <p className="card-text">{valor.descripcion}</p>
                                        <p className="card-text">{valor.dificultad}</p>
                                        <p className="card-text">{valor.categoria}</p>
                                        <p className="card-text">{valor.fecha}</p>
                                        <p className="card-text">{valor.lugar}</p>
                                        <p className="card-text">{valor.cantidad_maxima_participantes}</p>
                                        <p className="card-text">{valor.realizado}</p>
                                        <button type="button" className="btn btn-rounded btnRegistrate" onClick={Registrate} >Registrate!</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    
                    }

                </div>

            </div>
        )
    }


}