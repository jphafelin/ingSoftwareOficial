import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState("")
    const navigate = useNavigate();


    const handleClick = async(e) =>{
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
        <div className="wrapper">
            <form className="form-signin"onSubmit={handleClick}>
                <h2 className="form-signin-heading">Ingresar</h2>
                <input type="text" className="form-control" name="username" placeholder="Email"value={email} onChange={ (e)=> {setEmail(e.target.value)}} required="" autoFocus="" />
                <input type="password" className="form-control" name="password" placeholder="Contraseña"value={password} onChange={ (e)=> {setPassword(e.target.value)}} required="" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                {error && <div className="text-danger text-center mt-3">{error}</div>}
            </form>
        </div>

    );
};