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

  const bankDetails = {
    bankName: "Banco Ejemplo",
    accountNumber: "123456789",
    swiftCode: "SWIFT123",
    iban: "ES12345678901234567890",
    accountHolder: "Club de Tenis Ejemplo",
  };

  return (
    <div className="transferir justify-content-center">
      {token ? (
        <div>
          

          

          <div
            id="formulario"
            className="col col-lg-3 col-md-12 text-center p-5 border border-3 border-dark bg-light"
          >
            <h2 className="mb-4">Datos Bancarios</h2> {/* Título más pequeño */}
            <div className="bank-info">
              <p>
                <strong>Banco:</strong> {bankDetails.bankName}
              </p>
              <p>
                <strong>Número de cuenta:</strong> {bankDetails.accountNumber}
              </p>
              <p>
                <strong>Código SWIFT:</strong> {bankDetails.swiftCode}
              </p>
              <p>
                <strong>IBAN:</strong> {bankDetails.iban}
              </p>
              <p>
                <strong>Titular de la cuenta:</strong> {bankDetails.accountHolder}
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