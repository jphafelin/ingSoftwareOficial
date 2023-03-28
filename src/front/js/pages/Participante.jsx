import React, { Component } from 'react';

export class Participante extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participantes: []
    };
  }

  componentDidMount() {
    fetch('/participante')
      .then(response => response.json())
      .then(data => {
        this.setState({ participantes: data.results });
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Contacto de emergencia</th>
            <th>Asistencia médica</th>
          </tr>
        </thead>
        <tbody>
          {this.state.participantes.map(participante => (
            <tr key={participante.id}>
              <td>{participante.id}</td>
              <td>{participante.name}</td>
              <td>{participante.last_name}</td>
              <td>{participante.numero_telefono}</td>
              <td>{participante.nombre_contacto_emergencia} - {participante.numero_contacto_emergencia}</td>
              <td>{participante.asistencia_medica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

