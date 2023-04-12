import React, { Component } from "react";
import "../../styles/contacto.css";

export class Contacto extends Component {
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
      {/* <h1 className="qa-title">Contacto</h1> */}
      <ul className="qa">
        <li>
          <a  className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            Email{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              info@rutgreen.com.es{" "}
            </p>{" "}
          </div>{" "}
        </li>{" "}
        <li>
          <a  className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            Telefono{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              657 345 890.{" "}
            </p>{" "}
          </div>{" "}
        </li>{" "}
        <li>
          <a  className="qa-question text-uppercase " onClick={this.handleClick}>
            {" "}
            Nuestra Oficina{" "}
          </a>{" "}
          <div className="qa-answer">
            <p className="text-center">
              {" "}
              Av Simpre Viva 555, local C, 36210, Vigo , Pontevedra{" "}
            </p>{" "}
          </div>{" "}
        </li>{" "}
      </ul>{" "}
    </section>
  );
}
}