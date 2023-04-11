// Ver por qué no se crea el input de name
import React, {useState} from "react";
export const EditAdmin = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [name, setName]= useState("")
    const edit_id = localStorage.getItem("id_edit")
    const edit_user_id = localStorage.getItem("id_user_edit")
    
    
    
    const handleClick = () =>{
       var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
        
  		"email": email,
  		"password": password,
  		"is_active": true,
        
        
        

		});

		var requestOptions = {
  		method: 'PUT',
  		headers: myHeaders,
  		body: raw,
  		redirect: 'follow'
		};



        const host2= process.env.BACKEND_URL;
        const url2= host2 + "/api/user/" + edit_user_id

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
        const url= host + "/api/administradores/"+ edit_id
  
        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));    
        

        
		
        
        console.log("Estas registrado")
        localStorage.removeItem("id_edit")
        localStorage.removeItem("id_user_edit") 

        //return (
        //    <div class="alert alert-primary" role="alert">
        //        A simple primary alert—check it out!
        //    </div>)
    }

  

    return (
        <div className="wrapper">
            <form className="form-signin"onSubmit={handleClick}>
                <div className="col-5 p-5">
                <h2 className="form-signin-heading m-2">Editar Administrador</h2>
                <input type="text" className="form-control m-2" name="username" placeholder="Email"value={email} onChange={ (e)=> {setEmail(e.target.value)}} required="" autoFocus="" />
                <input type="password" className="form-control m-2" name="password" placeholder="Contraseña"value={password} onChange={ (e)=> {setPassword(e.target.value)}} required="" />
                <input type="text" className="form-control m-2" name="name" placeholder="Name"value={name} onChange={ (e)=> {setName(e.target.value)}} required="" autoFocus="" /> 

                <button className="btn btn-lg btn-primary btn-block m-2" type="submit">Editar</button>
                </div>
            </form>
        </div>

    );
};