import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import "./../../styles/transferir.css";

export const Transferir = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("id_user");
    localStorage.removeItem("nombre_user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  

  return (
    <div className="transferir justify-content-center">
      {token ? (
        <div>
          

          

          <div
            id="formulario"
            className="col col-lg-3 col-md-12 text-center p-4 border border-3 border-dark bg-light mt-5"
          >
            <h2 className="mb-4 mt-3">Datos de Transferencia</h2> {/* Título más pequeño */}
            <div className=" text-center">
              <p>
                <strong>Club de Tenis Viña del Mar</strong> 
              </p>
              <p>
                <strong>11.111.111-1</strong> 
              </p>
              <p>
                <strong>N° de cuenta: 11-111-11111-11</strong> 
              </p>
              <p>
                <strong>Banco Imaginario</strong> 
              </p>
              <p>
                <strong>correo@correo.com</strong>
              </p>
            </div>
          </div>

         
        </div>
      ) : (
        <h1>DEBE INICIAR SESIÓN</h1>
      )}
    </div>
  );
};