import React from "react";
import { useNavigate } from "react-router-dom";

import "./../../styles/transferir.css";

export const Transferir = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();



  

  return (
    <div className="transferir justify-content-center">
      {token ? (
        <div>
          

          

          <div
            id="formulario"
            className="col col-lg-3 col-md-12 text-center p-4 border border-3 border-dark bg-light"
          >
            <h2 className="mb-4 mt-3">Datos de Transferencia</h2> {/* Título más pequeño */}
            <div className=" text-center">
              <p>
                <strong>Club Deportivo Beach Tennis</strong> 
              </p>
              <p>
                <strong>65.151.484-3</strong> 
              </p>
              <p>
                <strong>Cuenta Corriente</strong> 
              </p>
              <p>
                <strong>N° de cuenta: 988507237</strong> 
              </p>
              <p>
                <strong>Banco Scotiabank</strong> 
              </p>
              <p>
                <strong>club.beachtennisv@gmail.com</strong>
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