import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css"


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const loginSuccesful = await actions.login(email, password);
      if (loginSuccesful) {
        navigate("/private");
      } else {
        setError("Correo electrónico o contraseña incorrectos");
      }
    } catch (error) {
      console.log(error);
      setError("Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  }

  return (
    <section className="login-section vh-100 divEdit">
      <div className="login-box">
        <form className="form-signin" onSubmit={handleClick}>
          <h1>Ingresar</h1>
          <div className="textbox1">
            <i class="fa-solid fa-envelope" />
            <input type="text" className="inp-form form-control" name="username" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required="" autoFocus="" />
          </div>
          <div className="textbox1">
            <i className="fa fa-lock" aria-hidden="true" />
            <input type="password" className="inp-form form-control" name="password" placeholder="Contraseña" value={password} onChange={(e) => { setPassword(e.target.value) }} required="" />
          </div>
          <button className="lg-btn" type="submit">Ingresar</button>
          {error && <div className="text-danger text-center mt-3">{error}</div>}
        </form>
      </div>
    </section>

  );
};