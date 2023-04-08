import React from "react";
import "../../styles/preguntasFrecuentes.css"

export const PreguntasFrecuentes = () => {

  /* $('ul.qa li a.question').click(function() {
    $(this).toggleClass('active').siblings('.answer').stop().slideToggle(function() {
      $(this).toggleClass('active');
    });
  }); */

  return (


<section className="register-section vh-100 vw-100">
  <ul class="qa">
    <li>
      <a href="javascript:;" class="question">¿Cómo puedo registrarme para el evento?</a>
      <div class="answer">
        <p>Puedes registrarte para el evento en línea a través de nuestra página web oficial.
  También puedes registrarte en persona en nuestra oficina ubicada en Av Castrelos 55, Vigo, Pontevedra , durante los horarios de atención al cliente.
  Si prefieres registrarte por teléfono, puedes llamarnos al número 987-654-334 y un miembro de nuestro equipo de atención al cliente te ayudará a completar tu registro.
  </p>
      </div>
    </li>
    <li>
      <a href="javascript:;" class="question">¿Cuál es la fecha límite para la inscripción?</a>
      <div class="answer">
        <p>La fecha límite para la inscripción es 72 hr habiles antes del evento. Te recomendamos que te inscribas lo antes posible para asegurarte un lugar en el evento.
  </p>
      </div>
    </li>
    <li>
      <a href="javascript:;" class="question">¿Hay estaciones de hidratación a lo largo del recorrido?</a>
      <div class="answer">
        <p>Nuestro equipo de organización del evento ha planificado cuidadosamente las estaciones de hidratación a lo largo del recorrido para asegurarse de que haya suficientes puntos de hidratación para todos los participantes.
  </p>
      </div>
    </li>
    <li>
      <a href="javascript:;" class="question">¿Puedo recibir un reembolso si no puedo asistir al evento?</a>
      <div class="answer">
        <p>Lo sentimos, pero no se realizarán reembolsos por cancelaciones de último momento. Sin embargo, puedes transferir tu inscripción a otra persona.

  </p>
      </div>
    </li>
    <li>
      <a href="javascript:;" class="question">¿Habrá algún tipo de ceremonia de premiación después del evento?</a>
      <div class="answer">
        <p>Después del evento, se llevará a cabo una ceremonia de premiación para los primeros lugares en cada categoría. También habrá medallas para todos los participantes que completen el recorrido.
  </p>
      </div>
    </li>
  </ul>
</section>
 );
};