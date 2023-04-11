import React, {useState} from "react";
export const EditMonitor = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [name, setName]= useState("")
    const [last_name, setLastName]= useState("")
    const edit_id = localStorage.getItem("id_edit")
    const edit_user_id = localStorage.getItem("id_user_edit")
    const host= process.env.BACKEND_URL;
    
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

		fetch(host +"/api/user/"+ edit_user_id, requestOptions)
  		.then(response => response.text())
  		.then(result => console.log(result))
  		.catch(error => console.log('error', error));

        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          
        "name": name,
        "last_name": last_name,
          
  
        });
  
        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
  
        fetch(host +"/api/monitor/"+ edit_id, requestOptions)
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
        <div className="wrapper ">
            <form className="form-signin "onSubmit={handleClick}>
                <div className="col-5 p-5">
                <h2 className="form-signin-heading m-2">Editar Monitor</h2>
                <input type="text" className="form-control m-2" name="username" placeholder="Email"value={email} onChange={ (e)=> {setEmail(e.target.value)}} required="" autoFocus="" />
                <input type="password" className="form-control m-2" name="password" placeholder="Contraseña"value={password} onChange={ (e)=> {setPassword(e.target.value)}} required="" />
                <input type="text" className="form-control m-2" name="name" placeholder="Name"value={name} onChange={ (e)=> {setName(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="last_name" placeholder="Last Name"value={last_name} onChange={ (e)=> {setLastName(e.target.value)}} required="" autoFocus="" />
                
                
                <button className="btn btn-lg btn-primary btn-block m-2" type="submit">Editar</button>
                </div>
            </form>
        </div>

    );
};