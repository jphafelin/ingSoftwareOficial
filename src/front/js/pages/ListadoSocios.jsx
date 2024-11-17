import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/listadosocios.css';

export const ListadoSocios = () => {
  const [searchNombre, setSearchNombre] = useState('');
  const [searchApellido, setSearchApellido] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchGenero, setSearchGenero] = useState('');
  const [searchPago, setSearchPago] = useState('');

  const [sociosData, setSociosData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
  const navigate = useNavigate();

  const host = process.env.BACKEND_URL;

  const requestOptions = {
    method: 'GET',
  };

  // Fetch de los datos de los socios
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${host}/api/socio`, { ...requestOptions, signal })
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.results.sort((a, b) => b.id - a.id);
        setSociosData(sortedData);
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

  // Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = sociosData
    .filter((item) => {
      const searchRegexNombre = new RegExp(searchNombre, 'i');
      const searchRegexApellido = new RegExp(searchApellido, 'i');
      const searchRegexEmail = new RegExp(searchEmail, 'i');
      const searchRegexGenero = new RegExp('^' + searchGenero, 'i');
      const searchRegexPago = new RegExp('^' + searchPago, 'i');

      const matchesPago = searchRegexPago.test(item.pago);

      return (
        searchRegexNombre.test(item.nombre) &&
        searchRegexApellido.test(item.apellido) &&
        searchRegexEmail.test(item.email) &&
        searchRegexGenero.test(item.genero) &&
        matchesPago
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el clic en una fila de la tabla
  const handleRowClick = (id) => {
    localStorage.setItem('id_socio', id);
    navigate(`/listadosocios/${id}`);
  };

  // Manejar el clic en el lápiz para editar
  const handleEditClick = (id) => {
    localStorage.setItem('id_socio', id);
    navigate(`/editar_socio/${id}`);
  };

  return (
    <div className="container listadosocios">
      <h3>CONSULTAR SOCIOS</h3>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Género</th>
            <th>Pago</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {/* Fila de búsqueda */}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                placeholder="Buscar Nombre"
                value={searchNombre}
                onChange={(e) => setSearchNombre(e.target.value)}
                className="search-input"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Buscar Apellido"
                value={searchApellido}
                onChange={(e) => setSearchApellido(e.target.value)}
                className="search-input"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Buscar Email"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
                className="search-input"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Buscar Género"
                value={searchGenero}
                onChange={(e) => setSearchGenero(e.target.value)}
                className="search-input"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Buscar Pago"
                value={searchPago}
                onChange={(e) => setSearchPago(e.target.value)}
                className="search-input"
              />
            </td>
            <td></td>
          </tr>

          {/* Filas de los socios */}
          {currentItems.map((item) => {
            const rowColor = item.pago === 'VIGENTE' ? 'green-row' : item.pago === 'NO VIGENTE' ? 'red-row' : '';

            return (
              <tr
                key={item.id}
                className={`table-row ${rowColor}`}
                onClick={() => handleRowClick(item.id)}
              >
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.email}</td>
                <td>{item.genero}</td>
                <td>{item.pago}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(item.id);
                    }}
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Controles de paginación */}
      <div className="pagination-container">
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {Math.ceil(sociosData.length / itemsPerPage)}
        </span>
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(sociosData.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>

      {/* Mostrar cantidad de registros encontrados */}
      <div className="record-count">
        Registros encontrados: {currentItems.length}
      </div>
    </div>
  );
};

