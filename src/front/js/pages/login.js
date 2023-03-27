import React, {useState} from "react";
export const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const token = sessionStorage.getItem("token");
    
    const handleClick = (e) => {
        e.preventDefault();
        const opts ={
            method: 'POST',
            headers: {"Content-Type": "application/json"
            },
            body: JSON.stringify({"email": email,
            "password": password
            })
    };
        

        fetch("https://3001-jphafelin-rutgreen-26xhugp3x6y.ws-eu92.gitpod.io/api/login", opts)
        .then(resp => {
            if(resp.status === 200) return resp.json();
            else alert("Hay algún error");
        })  
        .then(data => {
            console.log(data)
            sessionStorage.setItem("token", data.access_token)
        })
        .catch(error => console.log('error', error));
        
        //console.log(access_token) 
        setEmail("") 
        setPassword("")

        //return (
           // <div class="alert alert-primary" role="alert">
                //A simple primary alert—check it out!
            //</div>)
    };

   console.log(email);
   console.log(password);

    return (
        <div >
            <div >
                <h2 >Ingresar</h2>
                <input type="text" name="username" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit" onClick={(e) => handleClick(e)}>Ingresar</button>
            </div>
        </div>

    );
};