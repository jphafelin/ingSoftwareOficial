import React, { useState, useEffect } from 'react';
import '../../styles/listadosocios.css';



export const ListadoSocios = () => {
  const [searchNombre, setSearchNombre] = useState('');
  const [searchApellido, setSearchApellido] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchGenero, setSearchGenero] = useState('');

  const [sociosData, setSociosData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  var requestOptions = {
    method: 'GET',
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio', { ...requestOptions, signal })
      .then((response) => response.json())
      .then((data) => {
        setSociosData(data.results); // Accede a "results" dentro de la respuesta
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch canceled due to component unmounting');
        } else {
          console.error('Error fetching data:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = sociosData
    .filter((item) => {
      const searchRegexNombre = new RegExp(searchNombre, 'i');
      const searchRegexApellido = new RegExp(searchApellido, 'i');
      const searchRegexEmail = new RegExp(searchEmail, 'i');
      const searchRegexGenero = new RegExp('^' + searchGenero, 'i');

      return (
        searchRegexNombre.test(item.nombre) &&
        searchRegexApellido.test(item.apellido) &&
        searchRegexEmail.test(item.email) &&
        searchRegexGenero.test(item.genero)
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    sociosData.filter((item) => {
      const searchRegexNombre = new RegExp(searchNombre, 'i');
      const searchRegexApellido = new RegExp(searchApellido, 'i');
      const searchRegexEmail = new RegExp(searchEmail, 'i');
      const searchRegexGenero = new RegExp('^' + searchGenero, 'i');

      return (
        searchRegexNombre.test(item.nombre) &&
        searchRegexApellido.test(item.apellido) &&
        searchRegexEmail.test(item.email) &&
        searchRegexGenero.test(item.genero)
      );
    }).length / itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <button
          className="btn"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="btn"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    );
  };

  return (
    <div className="container listadosocios">
      <div>
        <h3>CONSULTAR SOCIOS</h3>
      </div>

      <div className="d-flex">
        <div className='col-1'></div>
        <input
          className="col-2"
          type="text"
          placeholder="Buscar por Nombre"
          value={searchNombre}
          onChange={(e) => setSearchNombre(e.target.value)}
        />
        <input
          className="col-2"
          type="text"
          placeholder="Buscar por Apellido"
          value={searchApellido}
          onChange={(e) => setSearchApellido(e.target.value)}
        />
        <input
          className="col-2"
          type="text"
          placeholder="Buscar por Email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <input
          className="col-2"
          type="text"
          placeholder="Buscar por Género"
          value={searchGenero}
          onChange={(e) => setSearchGenero(e.target.value)}
        />
      </div>

      <div>
        <div className="d-flex">
          <div className="col-1">
            <b>ID</b>
          </div>
          <div className="col-2">
            <b>Nombre</b>
          </div>
          <div className="col-2">
            <b>Apellido</b>
          </div>
          <div className="col-3">
            <b>Email</b>
          </div>
          <div className="col-1">
            <b>Género</b>
          </div>
        </div>

        {currentItems.map((item) => (
          <div key={item.id} className="d-flex">
            <div className="col-1">{item.id}</div>
            <div className="col-2">{item.nombre}</div>
            <div className="col-2">{item.apellido}</div>
            <div className="col-3">{item.email}</div>
            <div className="col-1">{item.genero}</div>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        {renderPagination()}
      </div>
    </div>
  );
};
