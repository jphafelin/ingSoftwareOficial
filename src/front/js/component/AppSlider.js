import ImageSlider from "./ImageSlider";
import React from "react";


export const AppSlider = () => {
    const slides = [
        { url: "https://raw.githubusercontent.com/jphafelin/Rut-Green/fa412bd58168e37ca3649f3797aabc4af3f4f771/src/front/img/Eventos/1%20maraton%20Vigo.jpg", title: "Maraton" },
        { url: "https://raw.githubusercontent.com/jphafelin/Rut-Green/fa412bd58168e37ca3649f3797aabc4af3f4f771/src/front/img/Eventos/2%20camino%20de%20santiago.webp", title: "Camino de Santiago" },
        { url: "https://raw.githubusercontent.com/jphafelin/Rut-Green/fa412bd58168e37ca3649f3797aabc4af3f4f771/src/front/img/Eventos/3%20ciclismo%20Lugo.jpg", title: "Ciclismo" },
        { url: "https://raw.githubusercontent.com/jphafelin/Rut-Green/fa412bd58168e37ca3649f3797aabc4af3f4f771/src/front/img/Eventos/4%20triatlon.jpg", title: "Triatlon" },
        { url: "https://raw.githubusercontent.com/jphafelin/Rut-Green/fa412bd58168e37ca3649f3797aabc4af3f4f771/src/front/img/Eventos/5%20Triatlon%20.jpg", title: "Triatlon" },
        { url: "https://raw.githubusercontent.com/jphafelin/Rut-Green/fa412bd58168e37ca3649f3797aabc4af3f4f771/src/front/img/Eventos/6%20senderismo.jpg", title: "Senderismo" },
      ];
  const containerStyles = {
    display: "flex",
    width: "auto",
    height: "600px",
    padding: "0px",
    
  };
  const containerStylesInt = {
    display: "flex",
    width: "100%",
    height: "480px",
    padding: "0px",
    margin:"10px",
    
  };

  return (
    <div className="container-fluid" style={containerStyles}>
      
      <div className="container-fluid" style={containerStylesInt} >
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};