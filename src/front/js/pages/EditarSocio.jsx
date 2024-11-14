import React, { useState, useEffect } from "react";
import '../../styles/detallesocio.css';

export const EditarSocio = () => {
    // Estados para los atributos del Socio
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [rut, setRut] = useState("");
    const [numero_telefono, setNumeroTelefono] = useState("");
    const [genero, setGenero] = useState("");
    const [password, setPassword] = useState("");

    const edit_id = localStorage.getItem("id_socio");

    // Función para obtener los datos del socio por ID
    const get_socio = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio/${edit_id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // Actualizar los estados con los datos del socio
                setNombre(result.nombre);
                setApellido(result.apellido);
                setEmail(result.email);
                setRut(result.rut);
                setNumeroTelefono(result.numero_telefono);
                setGenero(result.genero);
                setPassword(result.password);
            })
            .catch(error => console.log('error', error));
    };

    // Ejecutar la función para obtener los datos del socio al montar el componente
    useEffect(() => {
        get_socio();
    }, []);

    // Manejar la actualización del socio
    const handleClick = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            nombre,
            apellido,
            email,
            rut,
            numero_telefono,
            genero,
            password
        });

        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio/${edit_id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log("Cambios Realizados");
    };

    return (
        <div className="wrapper">
            <form className="form-signin" onSubmit={handleClick}>
                <h2 className="form-signin-heading">Editar Socio</h2>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="RUT"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Número de Teléfono"
                    value={numero_telefono}
                    onChange={(e) => setNumeroTelefono(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Género"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
};
