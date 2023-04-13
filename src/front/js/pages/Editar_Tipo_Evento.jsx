import React, {useState} from "react";
export const EditarTipoEvento = () => {
    
        
    
    const [name, setName]= useState("")
    const [descripcion, setDescripcion]= useState("")
    const [dificultad, setDificultad]= useState("")
    const [categoria, setCategoria]= useState("")
    const [url_imagen, setUrlImagen]= useState("")
    const edit_id = localStorage.getItem("id_edit")
    const host= process.env.BACKEND_URL;

    
    
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
 
         fetch(host +"/api/tipo-de-evento/" + edit_id  , requestOptions) // Es id - 1
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));
 
         
         console.log("Cambios Realizados")
       
     
 
     }
    return (
        <div className="wrapper p-5">
            <form className="form-signin col-5"onSubmit={handleClick}>
                <h2 className="form-signin-heading m-2">Editar Tipo de Evento</h2>
                <input type="text" className="form-control m-2" name="name" placeholder="Name"value={name} onChange={ (e)=> {setName(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="descripcion" placeholder="Descripcion"value={descripcion} onChange={ (e)=> {setDescripcion(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="dificultad" placeholder="Dificultad"value={dificultad} onChange={ (e)=> {setDificultad(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="categoria" placeholder="Categoria"value={categoria} onChange={ (e)=> {setCategoria(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="url_imagen" placeholder="Url_Imagen"value={url_imagen} onChange={ (e)=> {setUrlImagen(e.target.value)}} required="" autoFocus="" />
                
                
                <button className="btn btn-lg btn-primary btn-block m-2" type="submit">Editar</button>
            </form>
        </div>

    );
    
};