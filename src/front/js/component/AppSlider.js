import ImageSlider from "./ImageSlider";
import React from "react";
import maratonVigo from "../../img/Eventos/maratonVigo.jpg"
import senderismo from "../../img/Eventos/senderismo.jpg"
import triatlon from "../../img/Eventos/triatlon.jpg"
export const AppSlider = () => {
    const slides = [
        { url: `${maratonVigo}`, title: "Maraton" , text: "<<Comparte con nosotros experiencias INOLVIDABLES!>>"},
        { url: `${senderismo}`, title: "Senderismo", text: "<<Amplia tus horizontes mientras disfrutas del aire libre>>" },
        { url: `${triatlon}`, title: "Ciclismo",  text: "<<Registrate y pasala en GRANDE!!!>>"},
      ];
  const containerStyles = {
    display: "flex",
    width: "auto",
    height: "700px",
    padding: "0px",
  };
  const containerStylesInt = {
    display: "flex",
    width: "100%",
    height: "580px",
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