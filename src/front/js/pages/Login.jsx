import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const host = process.env.BACKEND_URL;

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Enviar la solicitud al backend
      const response = await fetch(`${host}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenar el token en el almacenamiento local
        localStorage.setItem('token', data.access_token);
        navigate("/programacion");
        // Recargar la página para actualizar el navbar
        window.location.reload();  // Esta línea fuerza el refresco de la página
      } else {
        setError(data.msg || "Correo electrónico o contraseña incorrectos");
      }
    } catch (error) {
      console.log(error);
      setError("Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <section className="login-section vh-100 vw-100">
      <div className="login-box">
        <form className="form-signin" onSubmit={handleClick}>
          <h1>Ingresar</h1>
          <div className="textbox">
            <i className="fa-solid fa-envelope" />
            <input
              type="text"
              className="inp-form form-control"
              name="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="textbox">
            <i className="fa fa-lock" aria-hidden="true" />
            <input
              type="password"
              className="inp-form form-control"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="lg-btn" type="submit">Ingresar</button>
          {error && <div className="text-danger text-center mt-3">{error}</div>}
        </form>
      </div>
    </section>
  );
};

