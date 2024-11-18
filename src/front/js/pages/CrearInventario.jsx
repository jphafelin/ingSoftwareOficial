import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/crearinventario.css';

export const CrearInventario = () => {
    const [elemento, setElemento] = useState("");
    const [lugar, setLugar] = useState("");
    const [estado, setEstado] = useState("VIGENTE");
    const navigate = useNavigate();

    const host = process.env.BACKEND_URL;

    // Función para manejar la creación del inventario
    const handleCreateClick = (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            elemento,
            lugar,
            estado,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch(`${host}/api/inventario`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    alert("Inventario creado exitosamente");
                    navigate("/listadoinventario"); // Redireccionar al usuario
                } else {
                    alert("Ocurrió un error al crear el inventario");
                }
            })
            .catch(error => {
                console.error("Error de red:", error);
                alert("No se pudo realizar la creación.");
            });
    };

    return (
        <div className="form-wrapper">
            <div className="card shadow-lg">
                <div className="card-header bg-success text-white text-center">
                    <h2>Crear Inventario</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleCreateClick}>
                        <div className="mb-3">
                            <label className="form-label">Elemento</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Elemento"
                                value={elemento}
                                onChange={(e) => setElemento(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Lugar</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Lugar"
                                value={lugar}
                                onChange={(e) => setLugar(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Estado</label>
                            <select
                                className="form-select"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                required
                            >
                                
                                <option value="VIGENTE">VIGENTE</option>
                                <option value="NO VIGENTE">NO VIGENTE</option>
                            </select>
                        </div>
                        <button className="btn btn-success w-100" type="submit">
                            Crear Inventario
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

