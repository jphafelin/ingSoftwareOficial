import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Enrolled } from "./Enrolled.jsx"

export const EventosCiclismo = () => {
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
                <div className="container-fluid justify-content-evenly mx-md-4 mt-2 mb-2 divCategorias">CICLISMO</div>
                <div className="row justify-content-evenly mx-md-4 mt-2 mb-2">
                    {myArray.map((valor) => (
                        valor.categoria === "Ciclismo" ?(
                            <div className="col-12">
                                <div className="card" key={valor.id}>
                                    <img src={valor.url_imagen} className="card-img-top" alt="..."/>
                                    <div className="card-body ">
                                    <div className="gap-2 col-6 mx-auto"><h5 className="card-title">{valor.name}</h5></div>
                                        <p className="card-text"><b>Descripcion:</b> {valor.descripcion}</p>
                                        <p className="card-text"><b>Dificultad:</b> {valor.dificultad}</p>
                                        <p className="card-text"><b>Categoría:</b> {valor.categoria}</p>
                                        <p className="card-text"><b>Fecha:</b> {valor.fecha}</p>
                                        <p className="card-text"><b>Lugar:</b> {valor.lugar}</p>
                                        <p className="card-text"><b>Cantidad de Personas por Evento:</b> {valor.cantidad_maxima_participantes}</p>
                                        <p className="card-text"><b>Precio: {valor.precio}€</b></p>
                                        <div className="btn-register d-grid gap-2 col-6 mx-auto"><button type="button" className="btn btn-rounded btnRegistrate " onClick={Registrate} >Registrate!</button></div>
                                    </div>
                                </div>
                            </div>
                        ):(null)
                        ))
                    }
                </div>
            </div>
        )
    }
}