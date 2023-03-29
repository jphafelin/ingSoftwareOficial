import React, {useState} from "react";
export const Register = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [name, setName]= useState("")
    const [last_name, setLastName]= useState("")
    const [numero_telefono, setNumeroTelefono]= useState("")
    const [nombre_contacto_emergencia, setNombreContactoEmergencia]= useState("")
    const [numero_contacto_emergencia, setNumeroContactoEmergencia]= useState("")
    const [asistencia_medica, setAsistenciaMedica]= useState("")
    const handleClick = () =>{
       var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
        
  		"email": email,
  		"password": password,
        "name": name,
        "last_name": last_name,
        //"url_image": url_image,
        "numero_telefono": numero_telefono,
        "nombre_contacto_emergencia": nombre_contacto_emergencia,
        "numero_contacto_emergencia": numero_contacto_emergencia,
        "asistencia_medica": asistencia_medica

		});

		var requestOptions = {
  		method: 'POST',
  		headers: myHeaders,
  		body: raw,
  		redirect: 'follow'
		};

		fetch("https://3001-jphafelin-rutgreen-26xhugp3x6y.ws-eu92.gitpod.io/api/register-participante", requestOptions)
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

   console.log(email);
   console.log(password);

    return (
        <div className="wrapper">
            <form className="form-signin"onSubmit={handleClick}>
                <h2 className="form-signin-heading">Registrate</h2>
                <input type="text" className="form-control" name="username" placeholder="Email"value={email} onChange={ (e)=> {setEmail(e.target.value)}} required="" autoFocus="" />
                <input type="password" className="form-control" name="password" placeholder="Contraseña"value={password} onChange={ (e)=> {setPassword(e.target.value)}} required="" />
                <input type="text" className="form-control" name="name" placeholder="Name"value={name} onChange={ (e)=> {setName(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="last_name" placeholder="Last Name"value={last_name} onChange={ (e)=> {setLastName(e.target.value)}} required="" autoFocus="" />
                <input type="number" className="form-control" name="numero_telefono" placeholder="Número de Teléfono"value={numero_telefono} onChange={ (e)=> {setNumeroTelefono(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="nombre_contacto_emergencia" placeholder="Nombre Contacto de Emergencia"value={nombre_contacto_emergencia} onChange={ (e)=> {setNombreContactoEmergencia(e.target.value)}} required="" autoFocus="" />
                <input type="number" className="form-control" name="numero_contacto_emergencia" placeholder="Número Contacto de Emergencia"value={numero_contacto_emergencia} onChange={ (e)=> {setNumeroContactoEmergencia(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="asistencia_medica" placeholder="Asistencia Médica"value={asistencia_medica} onChange={ (e)=> {setAsistenciaMedica(e.target.value)}} required="" autoFocus="" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Registrate</button>
            </form>
        </div>

    );
};