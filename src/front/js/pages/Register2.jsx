import React, {useState} from "react";
import "./../../styles/register.css";
export const Register2 = () => {
    const [nombre, setNombre]= useState("")
    const [apellido, setApellido]= useState("")
    const [email, setEmail]= useState("")
    const [rut, setRut]= useState("")
    const [numero_telefono, setNumeroTelefono]= useState("")
    const [genero, setGenero]= useState("")
    const [password, setPassword]= useState("")
    
    
    const handleClick = () =>{
        
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
           redirect: 'follow'
         };
 
         fetch("https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio", requestOptions)
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));
         
 
         
        
         setEmail("") 
         setPassword("")
         console.log("Estas registrado") 
         
 
         //return (
         //    <div class="alert alert-primary" role="alert">
         //        A simple primary alert—check it out!
         //    </div>)
     }
    return (
        
        <div className="wrapper row justify-content-center  ">
            <form className="form-signin col-4 text-center p-4 rounded m-3 login-box "onSubmit={handleClick}>
                <h2 className="form-signin-heading">Crea una cuenta</h2>
                <input type="text" className="form-control m-2" name="nombre" placeholder="Nombre"value={nombre} onChange={ (e)=> {setNombre(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="apellido" placeholder="Apellido"value={apellido} onChange={ (e)=> {setApellido(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="email" placeholder="Correo Electrónico"value={email} onChange={ (e)=> {setEmail(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="rut" placeholder="RUT"value={rut} onChange={ (e)=> {setRut(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="numero_telefono" placeholder="Número de Teléfono"value={numero_telefono} onChange={ (e)=> {setNumeroTelefono(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="genero" placeholder="Género"value={genero} onChange={ (e)=> {setGenero(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="password" placeholder="Contraseña"value={password} onChange={ (e)=> {setPassword(e.target.value)}} required="" autoFocus="" />
                
                <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarte</button>
            </form>
        </div>

    );
    
};