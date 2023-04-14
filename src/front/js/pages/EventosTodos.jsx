import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Enrolled } from "./Enrolled.jsx"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const EventosTodos = () => {
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
                <div className="container-fluid justify-content-evenly mx-md-4 mt-2 mb-2 divCategorias">EVENTOS</div>
                <div className="row justify-content-evenly mx-md-4 mt-2 mb-2">
                    {myArray.map((valor) => (
                        
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
                                    <div className="container text-center col">

                                            <PayPalScriptProvider options={{ "client-id": "Afo8929WhwV4xTsDyJ3y5Q5XH4S8o4f2kv380sIBebbr7Qp6nwyXxexAAtfa5ZSrDnt2FNBJalkZA6TK", currency: "EUR" }}>
                                                <PayPalButtons
                                                    createOrder={(data, actions) => {
                                                        const precio = valor.precio
                                                        return actions.order.create({
                                                            purchase_units: [
                                                                {
                                                                    amount: {
                                                                        value: precio,
                                                                    },
                                                                },
                                                            ],
                                                        });
                                                    }}
                                                    onApprove={(data, actions) => {

                                                        var myHeaders = new Headers();
                                                        myHeaders.append("Content-Type", "application/json");

                                                        var raw = JSON.stringify({
                                                            "id_evento": 1,
                                                            "id_participante": 1,
                                                            "apto_medico": true,
                                                            "asistencia": false
                                                        });

                                                        var requestOptions = {
                                                            method: 'POST',
                                                            headers: myHeaders,
                                                            body: raw,
                                                            redirect: 'follow'
                                                        };

                                                        fetch("https://3001-jphafelin-rutgreen-ri64c4cmro5.ws-eu94.gitpod.io/api/participantes_de_evento", requestOptions)
                                                            .then(response => response.text())
                                                            .then(result => console.log(result))
                                                            .catch(error => console.log('error', error));
                                                        return actions.order.capture().then(function (details) {

                                                            alert(
                                                                "Transacción Correcta"
                                                            );

                                                        });
                                                    }}
                                                />
                                            </PayPalScriptProvider>

                                        </div>
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