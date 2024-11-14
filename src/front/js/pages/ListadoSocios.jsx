import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/listadosocios.css';

export const ListadoSocios = () => {
  const [searchNombre, setSearchNombre] = useState('');
  const [searchApellido, setSearchApellido] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchGenero, setSearchGenero] = useState('');

  const [sociosData, setSociosData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
  const navigate = useNavigate();

  const requestOptions = {
    method: 'GET',
  };

  // Fetch de los datos de los socios
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://3001-jphafelin-ingsoftwareof-je87mcfudu9.ws-us116.gitpod.io/api/socio', { ...requestOptions, signal })
      .then((response) => response.json())
      .then((data) => {
        setSociosData(data.results);
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

      return (
        searchRegexNombre.test(item.nombre) &&
        searchRegexApellido.test(item.apellido) &&
        searchRegexEmail.test(item.email) &&
        searchRegexGenero.test(item.genero)
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el clic en una fila de la tabla
  const handleRowClick = (id) => {
    localStorage.setItem('id_socio', id); // Guarda el ID del socio en localStorage
    navigate(`/listadosocios/${id}`);
  };

  // Manejar el clic en el lápiz para editar
  const handleEditClick = (id) => {
    localStorage.setItem('id_socio', id); // Guarda el ID del socio en localStorage
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
            <th>Editar</th> {/* Columna para el lápiz */}
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
            <td></td>
          </tr>

          {/* Filas de los socios */}
          {currentItems.map((item) => (
            <tr
              key={item.id}
              className="table-row"
              onClick={() => handleRowClick(item.id)} // Clic en la fila
            >
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.email}</td>
              <td>{item.genero}</td>
              <td>
                {/* Ícono de lápiz para editar */}
                <button
                  className="edit-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar que el clic se propague a la fila
                    handleEditClick(item.id);
                  }}
                >
                  <i className="fas fa-pencil-alt"></i> {/* Lápiz FontAwesome */}
                </button>
              </td>
            </tr>
          ))}
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
    </div>
  );
};





