
import React, { Component } from "react";
import "../../styles/preguntasFrecuentes.css";

export class PreguntasFrecuentes extends Component {
  handleClick = (e) =>{
    e.preventDefault();
    const $target = $(e.target);
    $target.toggleClass('active').siblings('.qa-answer').stop().slideToggle(() => {
      $(this).toggleClass('active');
    });
  }

  render() {
    return (
    <section className="qa-section vh-100 vw-100">
      {/* <h1 className="qa-title">Preguntas Frecuentes</h1> */}
      <ul className="qa">
        <li>
          <a  className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            ¿Cómo puedo registrarme para el evento ?{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              Puedes registrarte para el evento en línea a través de nuestra
              página web oficial.También puedes registrarte en persona en
              nuestra oficina ubicada en Av Castrelos 55, Vigo, Pontevedra,
              durante los horarios de atención al cliente.Si prefieres
              registrarte por teléfono, puedes llamarnos al número 987 - 654 -
              334 y un miembro de nuestro equipo de atención al cliente te
              ayudará a completar tu registro.{" "}
            </p>{" "}
          </div>{" "}
        </li>{" "}
        <li>
          <a  className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            ¿Cuál es la fecha límite para la inscripción ?{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              La fecha límite para la inscripción es 72 hr habiles antes del
              evento.Te recomendamos que te inscribas lo antes posible para
              asegurarte un lugar en el evento.{" "}
            </p>{" "}
          </div>{" "}
        </li>{" "}
        <li>
          <a  className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            ¿Hay estaciones de hidratación a lo largo del recorrido ?{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              Nuestro equipo de organización del evento ha planificado
              cuidadosamente las estaciones de hidratación a lo largo del
              recorrido para asegurarse de que haya suficientes puntos de
              hidratación para todos los participantes.{" "}
            </p>{" "}
          </div>{" "}
        </li>{" "}
        <li>
          <a className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            ¿Puedo recibir un reembolso si no puedo asistir al evento ?{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              Lo sentimos, pero no se realizarán reembolsos por cancelaciones de
              último momento.Sin embargo, puedes transferir tu inscripción a
              otra persona.
            </p>{" "}
          </div>{" "}
        </li>{" "}
        <li>
          <a className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            ¿Habrá algún tipo de ceremonia de premiación después del evento ?{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              Después del evento, se llevará a cabo una ceremonia de premiación
              para los primeros lugares en cada categoría.También habrá medallas
              para todos los participantes que completen el recorrido.{" "}
            </p>{" "}
          </div>{" "}
        </li>{" "}
      </ul>{" "}
    </section>
  );
}
}
