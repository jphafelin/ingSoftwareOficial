import React, { useState, useEffect } from "react";
import '../../styles/detallesocio.css';

export const DetalleSocio = () => {
    // Estados para los atributos del Socio
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [rut, setRut] = useState("");
    const [numero_telefono, setNumeroTelefono] = useState("");
    const [genero, setGenero] = useState("");
    const [pago, setPago] = useState("");
    const edit_id = localStorage.getItem("id_socio");
    const host= process.env.BACKEND_URL;

    // Función para obtener los datos del socio por ID
    const get_socio = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${host}/api/socio/${edit_id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setNombre(result.nombre);
                setApellido(result.apellido);
                setEmail(result.email);
                setRut(result.rut);
                setNumeroTelefono(result.numero_telefono);
                setGenero(result.genero);
                setPago(result.pago);
            })
            .catch(error => console.log('error', error));
    };

    // Ejecutar la función para obtener los datos del socio al montar el componente
    useEffect(() => {
        get_socio();
    }, []);

    return (
        <div className="detalle-socio-container">
            <h2>Detalle del Socio</h2>
            <div className="detalle-socio-card">
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Apellido:</strong> {apellido}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>RUT:</strong> {rut}</p>
                <p><strong>Número de Teléfono:</strong> {numero_telefono}</p>
                <p><strong>Género:</strong> {genero}</p>
                <p><strong>Estado del Pago:</strong> {pago}</p>
            </div>
        </div>
    );
};

