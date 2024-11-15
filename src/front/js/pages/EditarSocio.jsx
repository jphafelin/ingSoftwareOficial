import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/editarsocio.css';

export const EditarSocio = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [rut, setRut] = useState("");
    const [numero_telefono, setNumeroTelefono] = useState("");
    const [genero, setGenero] = useState("");
    const navigate = useNavigate();

    const edit_id = localStorage.getItem("id_socio");

    // Función para obtener los datos del socio
    const get_socio = () => {
        fetch(`https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio/${edit_id}`)
            .then(response => {
                if (!response.ok) throw new Error("Error al obtener los datos del socio");
                return response.json();
            })
            .then(result => {
                setNombre(result.nombre);
                setApellido(result.apellido);
                setEmail(result.email);
                setRut(result.rut);
                setNumeroTelefono(result.numero_telefono);
                setGenero(result.genero);
            })
            .catch(error => console.error(error));
    };

    useEffect(() => {
        get_socio();
    }, []);

    // Función para manejar la actualización del socio
    const handleClick = (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            nombre,
            apellido,
            email,
            rut,
            numero_telefono,
            genero,
        });

        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
        };

        fetch(`https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio/${edit_id}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    alert("Cambios guardados exitosamente");
                    navigate("/listadosocios"); // Redireccionar al usuario
                } else if (response.status === 400) {
                    alert("El RUT o el email corresponden a otro socio");
                } else {
                    alert("Ocurrió un error al actualizar el socio");
                }
            })
            .catch(error => {
                console.error("Error de red:", error);
                alert("No se pudo realizar la actualización. El RUT o el email corresponden a otro socio.");
            });
    };

    return (
        <div className="form-wrapper">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white text-center">
                    <h2>Editar Socio</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleClick}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Apellido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">RUT</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="RUT"
                                    value={rut}
                                    onChange={(e) => setRut(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Número de Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Número de Teléfono"
                                    value={numero_telefono}
                                    onChange={(e) => setNumeroTelefono(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Género</label>
                                <select
                                    className="form-select"
                                    value={genero}
                                    onChange={(e) => setGenero(e.target.value)}
                                    required
                                >
                                    <option value="">Seleccione Género</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
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




