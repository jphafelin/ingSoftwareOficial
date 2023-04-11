import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Enrolled } from "./Enrolled.jsx"
export const EventosRunning = () => {
    const { store, actions } = useContext(Context);
    function eventoRunning(e) {
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
               <div className="container-fluid justify-content-evenly mx-md-4 mt-2 mb-2 divCategorias">CATEGORÍAS</div> 
                <div className="row justify-content-evenly mx-md-4 mt-2 mb-2">
                    <div className="col"><button type="button" class="btn btn-rounded justify-content-right mx-md-2 mt-1 mb-1 btn-categoriasLf" onClick={eventoRunning} >RUNNING</button> </div>
    
                </div>
                
            </div>
        )
    }
    
    
}