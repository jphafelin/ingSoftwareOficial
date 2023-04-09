import React, { Component } from "react";
import "../../styles/nosotros.css";
import "../../styles/equipo.css";
import Sonia from "../../img/Team/sonia.png";
import Jose from "../../img/Team/josepablo.png";
import Norkys from "../../img/Team/norkys.png";
import Circle3 from "../../img/Team/circle3.jpg";

export class Nosotros extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const $target = $(e.target);
    $target
      .toggleClass("active")
      .siblings(".answer")
      .stop()
      .slideToggle(() => {
        $(this).toggleClass("active");
      });
  };

  render() {
    return (
      <section className="about-section vh-100 vw-100">
        <p className="intro-about fw-bolder fs-5">
          Somos un equipo compuesto por tres personas, con alma aventurera en
          busqueda de nuevos desafios estando en contacto con la naturaleza por
          esta razon dicidimos enfocarnos a un proyecto de este tipo y queremos
          darles a conocer{" "}
        </p>{" "}
        <ul className="qa">
          <li>
            <a className="question" onClick={this.handleClick}>
              {" "}
              <strong> MISIÓN </strong>
            </a>
            <div className="answer">
              <p className="text-center">
                Organizar eventos deportivos de alta calidad que fomenten el
                deporte, la salud y la diversión, y que ofrezcan experiencias
                únicas e inolvidables para todos los participantes.{" "}
              </p>{" "}
            </div>{" "}
          </li>{" "}
          <li>
            <a className="question" onClick={this.handleClick}>
              {" "}
              <strong> VISIÓN </strong>
            </a>
            <div className="answer">
              <p className="text-center">
                Ser reconocidos como la mejor empresa de organización de eventos
                deportivos en la región, destacándonos por la calidad de
                nuestros eventos y la satisfacción de nuestros clientes.{" "}
              </p>{" "}
            </div>{" "}
          </li>{" "}
          <li>
            <a className="question" onClick={this.handleClick}>
              {" "}
              <strong> VALORES </strong>
            </a>
            <div className="answer">
              <p className="text-center">
                Pasión por el deporte: Nos apasiona el deporte y creemos en su
                capacidad para mejorar la calidad de vida de las
                personas.Excelencia: Buscamos la excelencia en todo lo que
                hacemos, desde la organización de los eventos hasta la atención
                al cliente.Compromiso: Estamos comprometidos con nuestros
                clientes y con la comunidad en general, y trabajamos con
                responsabilidad y dedicación para ofrecerles los mejores eventos
                posibles.Innovación: Buscamos constantemente nuevas formas de
                mejorar nuestros eventos y de ofrecer experiencias únicas e
                innovadoras a nuestros participantes.Integridad: Nos guiamos por
                los más altos estándares de ética y honestidad en todas nuestras
                relaciones comerciales y personales.{" "}
              </p>{" "}
            </div>{" "}
          </li>{" "}
        </ul>{" "}
        <div className="team-people">
          <div className="team-person">
            <div className="team-container">
              <div className="container-inner">
                <img className="circle" src={Circle3} />
                <img className="person-img img1" src={Norkys} />
              </div>
            </div>
            <div className="name">Norkys González</div>
          </div>
          <div className="team-person">
            <div className="team-container">
              <div className="container-inner">
                <img className="circle" src={Circle3} />
                <img className="person-img img2" src={Jose} />
              </div>
            </div>
            <div className="name">José Pablo Häfelin</div>
          </div>
          <div className="team-person">
            <div className="team-container">
              <div className="container-inner">
                <img className="circle" src={Circle3} />
                <img className="person-img img3" src={Sonia} />
              </div>
            </div>
            <div className="name">Sonia Pagano Doval</div>
          </div>
        </div>
      </section>
    );
  }
}
