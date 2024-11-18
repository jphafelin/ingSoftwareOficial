import React, { useState, useEffect } from "react";
import '../../styles/detalleinventario.css';

export const DetalleInventario = () => {
    // Estados para los atributos del Inventario
    const [elemento, setElemento] = useState("");
    const [lugar, setLugar] = useState("");
    const [estado, setEstado] = useState("");
    const edit_id = localStorage.getItem("id_inventario");
    const host = process.env.BACKEND_URL;

    // Función para obtener los datos del inventario por ID
    const get_inventario = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(`${host}/api/inventario/${edit_id}`, requestOptions)
            .then(response => {
                if (!response.ok) throw new Error("Error al obtener los datos del inventario");
                return response.json();
            })
            .then(result => {
                setElemento(result.elemento);
                setLugar(result.lugar);
                setEstado(result.estado);
            })
            .catch(error => console.log('error', error));
    };

    // Ejecutar la función para obtener los datos del inventario al montar el componente
    useEffect(() => {
        get_inventario();
    }, []);

    return (
        <div className="detalle-inventario-container">
            <h2>Detalle del Inventario</h2>
            <div className="detalle-inventario-card">
                <p><strong>Elemento:</strong> {elemento}</p>
                <p><strong>Lugar:</strong> {lugar}</p>
                <p><strong>Estado:</strong> {estado}</p>
            </div>
        </div>
    );
};
