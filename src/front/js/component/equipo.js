import React from "react";
import "../../styles/equipo.css"
import Sonia from "../../img/Team/sonia.png"
import Jose from "../../img/Team/josepablo.png"
import Norkys from "../../img/Team/norkys.png"
import Circle3 from "../../img/Team/circle3.jpg"

export const Equipo = () => {
    return ( 
    <section className="sec-team">    
        <div className="team-person">
        <div className="team-container">
          <div className="container-inner">
            <img
              className="circle"
              src={Circle3}
            />
            <img
              className="person-img img1"
              src={Norkys}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="name">Norkys González</div>
      </div>
      <div className="team-person">
        <div className="team-container">
          <div className="container-inner">
            <img
              className="circle"
              src={Circle3}
            />
            <img
              className="person-img img2"
              src={Jose}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="name">José Pablo Häfelin</div>
      </div>
      <div className="team-person">
        <div className="team-container">
          <div className="container-inner">
            <img
              className="circle"
              src={Circle3}
            />
            <img
              className="person-img img3"
              src={Sonia}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="name">Sonia Pagano Doval</div>
      </div>
    </section>

    )
}