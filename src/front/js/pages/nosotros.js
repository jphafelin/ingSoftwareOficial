import React from "react";
import "../../styles/nosotros.css"



export const Nosotros = () => {

  /* $('ul.qa li a.question').click(function() {
    $(this).toggleClass('active').siblings('.answer').stop().slideToggle(function() {
      $(this).toggleClass('active');
    });
  }); */

  return (


<section className="nosotros-section vh-100 vw-100">
    <p>Somos un equipo compuesto por tres personas, con alma aventurera en busqueda de nuevos desafios estando en contacto con la naturaleza por esta razon dicidimos enfocarnos a un proyecto de este tipo y queremos darles a conocer </p>
  <ul class="qa">
    <li>
      <a href="javascript:;" class="question">Misión:</a>
      <div class="answer">
        <p>Organizar eventos deportivos de alta calidad que fomenten el deporte, la salud y la diversión, y que ofrezcan experiencias únicas e inolvidables para todos los participantes.
  </p>
      </div>
    </li>
    <li>
      <a href="javascript:;" class="question">Visión:</a>
      <div class="answer">
        <p>Ser reconocidos como la mejor empresa de organización de eventos deportivos en la región, destacándonos por la calidad de nuestros eventos y la satisfacción de nuestros clientes.
  </p>
      </div>
    </li>
    <li>
      <a href="javascript:;" class="question">Valores:</a>
      <div class="answer">
        <p>Pasión por el deporte: Nos apasiona el deporte y creemos en su capacidad para mejorar la calidad de vida de las personas.
Excelencia: Buscamos la excelencia en todo lo que hacemos, desde la organización de los eventos hasta la atención al cliente.
Compromiso: Estamos comprometidos con nuestros clientes y con la comunidad en general, y trabajamos con responsabilidad y dedicación para ofrecerles los mejores eventos posibles.
Innovación: Buscamos constantemente nuevas formas de mejorar nuestros eventos y de ofrecer experiencias únicas e innovadoras a nuestros participantes.
Integridad: Nos guiamos por los más altos estándares de ética y honestidad en todas nuestras relaciones comerciales y personales.
  </p>
      </div>
    </li>
</ul>
</section>
 );
};


    
    





