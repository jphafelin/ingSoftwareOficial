import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
export const EditarTipoEvento = () => {
    
    const host= process.env.BACKEND_URL;   
    const edit_id = localStorage.getItem("id_edit")
    // 1. Obtener del storage los valores del evento que corresponde al edit_id (que obtuvimos en la línea de arriba)
    const { store, actions } = useContext(Context);
    const tipo = store.tipo_evento[edit_id];
    console.log("TIPO DE EVENTO ACTUAL", tipo);
    console.log("TIPO DE EVENTO ACTUAL", tipo.categoria);
    
    // 2. Borrar los placeholder


        
    
  

    const [name, setName]= useState(tipo.name);
    const [descripcion, setDescripcion]= useState("")
    const [dificultad, setDificultad]= useState("")
    const [categoria, setCategoria]= useState("")
    const [url_imagen, setUrlImagen]= useState("")
    
    // 

    
    
    const handleClick = (e) =>{

        e.preventDefault();
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
                <input type="text" className="form-control m-2" name="name" value={name} onChange={ (e)=> {setName(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="descripcion" value={descripcion} onChange={ (e)=> {setDescripcion(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="dificultad" value={dificultad} onChange={ (e)=> {setDificultad(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="categoria" value={categoria} onChange={ (e)=> {setCategoria(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="url_imagen" value={url_imagen} onChange={ (e)=> {setUrlImagen(e.target.value)}} required="" autoFocus="" />
                
                
                <button className="btn btn-lg btn-primary btn-block m-2" type="submit">Editar</button>
            </form>
        </div>

    );
    
};