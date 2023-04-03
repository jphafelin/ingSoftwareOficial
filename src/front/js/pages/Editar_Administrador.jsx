// Ver por qué no se crea el input de name
import React, {useState} from "react";
export const EditAdmin = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [name, setName]= useState("")
    
    
    const handleClick = () =>{
       var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
        
  		"email": email,
  		"password": password,
  		"is_active": true,
        "name": name
        
        

		});

		var requestOptions = {
  		method: 'PUT',
  		headers: myHeaders,
  		body: raw,
  		redirect: 'follow'
		};



        const host2= process.env.BACKEND_URL;
        const url2= host2 + "/api/user/2"

		fetch(url2, requestOptions)
  		.then(response => response.text())
  		.then(result => console.log(result))
  		.catch(error => console.log('error', error));
    
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          
            
        "name": name
          
          
  
        });
  
        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
  
  
  
        const host= process.env.BACKEND_URL;
        const url= host + "/api/administradores/1"
  
        fetch(url, requestOptions)
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

                <button className="btn btn-lg btn-primary btn-block" type="submit">Registrate</button>
            </form>
        </div>

    );
};