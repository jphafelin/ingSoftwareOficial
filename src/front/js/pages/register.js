import React, {useState} from "react";
export const Register = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const handleClick = () =>{
        console.log("Estas registrado") 
        setEmail("") 
        setPassword("")
    }

   console.log(email);
   console.log(password);

    return (
        <div className="wrapper">
            <form className="form-signin"onSubmit={handleClick}>
                <h2 className="form-signin-heading">Registrate</h2>
                <input type="text" className="form-control" name="username" placeholder="Email"value={email} onChange={ (e)=> {setEmail(e.target.value)}} required="" autoFocus="" />
                <input type="password" className="form-control" name="password" placeholder="Contraseña"value={password} onChange={ (e)=> {setPassword(e.target.value)}} required="" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Registrate</button>
            </form>
        </div>

    );
};