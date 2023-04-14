import React, {useState} from "react";
export const EditarEvento = () => {
    
       
    
    const [fecha, setFecha]= useState("")
    const [idTipo, setIdTipo]= useState("")
    const [lugar, setLugar]= useState("")
    const [idMonitor, setIdMonitor]= useState("")
    const [cantidadMaximaParticipantes, setCantidadMaximaParticipantes]= useState("")
    const [precio, setPrecio]= useState("")
    const [realizado, setRealizado]= useState(false)
    const edit_id = localStorage.getItem("id_edit")
    const host= process.env.BACKEND_URL;
    
    
    
    const handleClick = () =>{
        
        var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
 
         var raw = JSON.stringify({
         
         "fecha": fecha,
         "id_tipo": idTipo,
         "lugar": lugar,
         "id_monitor": idMonitor,
         "cantidad_maxima_participantes": cantidadMaximaParticipantes,
         "precio": precio,
         "realizado": realizado,
         
 
         });
 
         var requestOptions = {
           method: 'PUT',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };
 
         fetch(host +"/api/evento/" + edit_id  , requestOptions) // Es id - 1
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));
 
         
         console.log("Cambios Realizados")
       
     
 
     }
    return (
        <div className="wrapper p-5">
            <form className="form-signin col-5"onSubmit={handleClick}>
                <h2 className="form-signin-heading m-2">Editar Tipo de Evento</h2>
                <input type="text" className="form-control m-2" name="Fecha" placeholder="Fecha"value={fecha} onChange={ (e)=> {setFecha(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="Id Tipo de Evento" placeholder="Id Tipo de Evento"value={idTipo} onChange={ (e)=> {setIdTipo(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="Lugar" placeholder="Lugar"value={lugar} onChange={ (e)=> {setLugar(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="Id Monitor" placeholder="Id Monitor"value={idMonitor} onChange={ (e)=> {setIdMonitor(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="Cantidad de participantes" placeholder="Cantidad de participantes"value={cantidadMaximaParticipantes} onChange={ (e)=> {setCantidadMaximaParticipantes(e.target.value)}} required="" autoFocus="" />
                <input type="text" className="form-control m-2" name="Precio" placeholder="Precio"value={precio} onChange={ (e)=> {setPrecio(e.target.value)}} required="" autoFocus="" />
                <input type="checkbox" className="form-check-input mt-0" name="Realizado" value={realizado} onChange={ (e)=> {setRealizado(e.target.value)}} required="" autoFocus="" />
                
                <button className="btn btn-lg btn-primary btn-block m-2" type="submit">Editar</button>
            </form>
        </div>

    );
    
};