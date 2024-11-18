import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/editarinventario.css';

export const EditarInventario = () => {
    const [elemento, setElemento] = useState("");
    const [lugar, setLugar] = useState("");
    const [estado, setEstado] = useState("");
    const navigate = useNavigate();
    
    const host = process.env.BACKEND_URL;

    const edit_id = localStorage.getItem("id_inventario");

    // Función para obtener los datos del inventario
    const get_inventario = () => {
        fetch(`${host}/api/inventario/${edit_id}`)
            .then(response => {
                if (!response.ok) throw new Error("Error al obtener los datos del inventario");
                return response.json();
            })
            .then(result => {
                setElemento(result.elemento);
                setLugar(result.lugar);
                setEstado(result.estado);
            })
            .catch(error => console.error(error));
    };

    useEffect(() => {
        get_inventario();
    }, []);

    // Función para manejar la actualización del inventario
    const handleClick = (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            elemento,
            lugar,
            estado,
        });

        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
        };

        fetch(`${host}/api/inventario/${edit_id}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    alert("Cambios guardados exitosamente");
                    navigate("/listadoinventario"); // Redireccionar al usuario
                } else {
                    alert("Ocurrió un error al actualizar el inventario");
                }
            })
            .catch(error => {
                console.error("Error de red:", error);
                alert("No se pudo realizar la actualización.");
            });
    };

    return (
        <div className="form-wrapper">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white text-center">
                    <h2>Editar Inventario</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleClick}>
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
                                <option value="">Seleccione Estado</option>
                                <option value="VIGENTE">VIGENTE</option>
                                <option value="NO VIGENTE">NO VIGENTE</option>
                            </select>
                        </div>
                        <button className="btn btn-primary w-100" type="submit">
                            Guardar Cambios
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
