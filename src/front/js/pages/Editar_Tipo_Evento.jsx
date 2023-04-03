import React, {useState} from "react";
export const EditarTipoEvento = () => {
   
    const [name, setName]= useState("Nuevo Nombre")
    const [descripcion, setDescripcion]= useState("Nueva Descripcion")
    const [dificultad, setDificultad]= useState("Nueva Dificultad")
    const [categoria, setCategoria]= useState("Nueva Categoria")
    const [url_imagen, setUrlImagen]= useState(" Nueva url_imagen")
    
    
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
           method: 'PUT',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };
 
         fetch("https://3001-jphafelin-rutgreen-b2q87zot1t2.ws-eu93.gitpod.io/api/tipo-de-evento/1", requestOptions) // Es id - 1
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));
 
         
         console.log("Cambios Realizados")
       
     
 
     }
    return (
        <div className="wrapper">
            <form className="form-signin"onSubmit={handleClick}>
                <h2 className="form-signin-heading">Editar Tipo de Evento</h2>
                <input type="text" className="form-control" name="name" placeholder="Name"value={name} onChange={ (e)=> {setName(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="descripcion" placeholder="Descripcion"value={descripcion} onChange={ (e)=> {setDescripcion(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="dificultad" placeholder="Dificultad"value={dificultad} onChange={ (e)=> {setDificultad(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="categoria" placeholder="Categoria"value={categoria} onChange={ (e)=> {setCategoria(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control" name="url_imagen" placeholder="Url_Imagen"value={url_imagen} onChange={ (e)=> {setUrlImagen(e.target.value)}} required="" autoFocus="" />
                
                
                <button className="btn btn-lg btn-primary btn-block" type="submit">Guardar Cambios</button>
            </form>
        </div>

    );
    
};