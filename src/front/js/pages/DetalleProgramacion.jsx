import React, { useState, useEffect } from "react";
import "../../styles/detalleprogramacion.css";

export const DetalleProgramacion = () => {
    // Estados para los atributos de la Programación
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [lugar, setLugar] = useState("");
    const [participantes, setParticipantes] = useState([]);
    const [realizado, setRealizado] = useState(false);

    const edit_id = localStorage.getItem("id_programacion"); // ID de la programación
    const host = process.env.BACKEND_URL;

    // Función para obtener los datos de la programación por ID
    const getProgramacion = () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(`${host}/api/programacion/${edit_id}`, requestOptions)
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener los datos de la programación");
                return response.json();
            })
            .then((result) => {
                setNombre(result.nombre);
                setFecha(result.fecha);
                setHora(result.hora);
                setLugar(result.lugar);
                setParticipantes(result.participantes.results || []);
                setRealizado(result.realizado);
            })
            .catch((error) => console.log("Error:", error));
    };

    // Ejecutar la función para obtener los datos de la programación al montar el componente
    useEffect(() => {
        getProgramacion();
    }, []);

    return (
        <div className="detalle-programacion-container">
            <h2>Detalle de la Programación</h2>
            <div className="detalle-programacion-card">
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Fecha:</strong> {fecha}</p>
                <p><strong>Hora:</strong> {hora}</p>
                <p><strong>Lugar:</strong> {lugar}</p>
                <p><strong>Participantes:</strong> {participantes.length > 0 ? participantes.join(", ") : "Ninguno"}</p>
                <p><strong>Realizado:</strong> {realizado ? "Sí" : "No"}</p>
            </div>
        </div>
    );
};
