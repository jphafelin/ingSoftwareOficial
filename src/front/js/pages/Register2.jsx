import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import "./../../styles/register.css";

export const Register2 = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [rut, setRut] = useState("");
    const [numero_telefono, setNumeroTelefono] = useState("");
    const [genero, setGenero] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); // Inicializa el hook useNavigate

    const handleClick = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "rut": rut,
            "numero_telefono": numero_telefono,
            "genero": genero,
            "password": password,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch("https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                // Redirige a la página de login después de registrar
                navigate("/login");
            })
            .catch(error => {
                console.log('error', error);
            });

        // Limpia los campos después de la petición
        setEmail("");
        setPassword("");
        console.log("Estás registrado");
    };

    return (
        <div className="wrapper row justify-content-center">
            <form className="form-signin text-center p-4 rounded m-0 login-box" onSubmit={handleClick}>
                <h2 className="form-signin-heading">Crea una cuenta</h2>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control m-2"
                            name="nombre"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => { setNombre(e.target.value); }}
                            required=""
                            autoFocus=""
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control m-2"
                            name="apellido"
                            placeholder="Apellido"
                            value={apellido}
                            onChange={(e) => { setApellido(e.target.value); }}
                            required=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="email"
                            className="form-control m-2"
                            name="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                            required=""
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control m-2"
                            name="rut"
                            placeholder="RUT"
                            value={rut}
                            onChange={(e) => { setRut(e.target.value); }}
                            required=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control m-2"
                            name="numero_telefono"
                            placeholder="Número de Teléfono"
                            value={numero_telefono}
                            onChange={(e) => { setNumeroTelefono(e.target.value); }}
                            required=""
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="password"
                            className="form-control m-2"
                            name="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); }}
                            required=""
                        />
                    </div>
                </div>
                <div className="form-group m-2 ">
                    <label>Género</label>
                    <div className="d-flex justify-content-center">
                        <div className="form-check m-2">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="genero"
                                value="Masculino"
                                checked={genero === "Masculino"}
                                onChange={(e) => { setGenero(e.target.value); }}
                            />
                            <label className="form-check-label">Masculino</label>
                        </div>
                        <div className="form-check m-2">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="genero"
                                value="Femenino"
                                checked={genero === "Femenino"}
                                onChange={(e) => { setGenero(e.target.value); }}
                            />
                            <label className="form-check-label">Femenino</label>
                        </div>
                        <div className="form-check m-2">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="genero"
                                value="Otro"
                                checked={genero === "Otro"}
                                onChange={(e) => { setGenero(e.target.value); }}
                            />
                            <label className="form-check-label">Otro</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarte</button>
            </form>
        </div>
    );
};



