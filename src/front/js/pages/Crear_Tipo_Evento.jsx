import React, {useState} from "react";
export const CrearTipoEvento = () => {
    const [name, setName]= useState("")
    const [descripcion, setDescripcion]= useState("")
    const [dificultad, setDificultad]= useState("")
    const [categoria, setCategoria]= useState("")
    const [url_imagen, setUrlImagen]= useState("")
    
    
    const handleClick = () =>{
        var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
 
         var raw = JSON.stringify({
         
         "name": name,
         "descripcion": descripcion,
         "dificultad": dificultad,
         "categoria": categoria,
         "url_imagen": url_imagen,
         
 
         });
 
         var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };
 
         fetch("https://3001-jphafelin-rutgreen-b2q87zot1t2.ws-eu93.gitpod.io/api/tipo-de-evento", requestOptions)
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
        <div className="wrapper">
            <form className="form-signin"onSubmit={handleClick}>
                <h2 className="form-signin-heading">Crear Tipo de Evento</h2>
                <input type="text" className="form-control" name="name" placeholder="Name"value={name} onChange={ (e)=> {setName(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="descripcion" placeholder="Descripcion"value={descripcion} onChange={ (e)=> {setDescripcion(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="dificultad" placeholder="Dificultad"value={dificultad} onChange={ (e)=> {setDificultad(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="categoria" placeholder="Categoria"value={categoria} onChange={ (e)=> {setCategoria(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="url_imagen" placeholder="Url_Imagen"value={url_imagen} onChange={ (e)=> {setUrlImagen(e.target.value)}} required="" autoFocus="" />
                
                
                <button className="btn btn-lg btn-primary btn-block" type="submit">Crear</button>
            </form>
        </div>

    );
    
};