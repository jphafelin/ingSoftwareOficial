import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/listadoprogramacion.css';

export const ListadoProgramacion = () => {
  const [searchNombre, setSearchNombre] = useState('');
  const [searchLugar, setSearchLugar] = useState('');
  const [searchRealizado, setSearchRealizado] = useState('');

  const [programacionData, setProgramacionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const host = process.env.BACKEND_URL;

  const requestOptions = {
    method: 'GET',
  };

  // Fetch de los datos de programación
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${host}/api/programacion`, { ...requestOptions, signal })
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.results.sort((a, b) => b.id - a.id);
        setProgramacionData(sortedData);
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

  const currentItems = programacionData
    .filter((item) => {
      const searchRegexNombre = new RegExp(searchNombre, 'i');
      const searchRegexLugar = new RegExp(searchLugar, 'i');
      const searchRegexRealizado = new RegExp('^' + searchRealizado, 'i');

      return (
        searchRegexNombre.test(item.nombre) &&
        searchRegexLugar.test(item.lugar) &&
        searchRegexRealizado.test(item.realizado ? 'Realizado' : 'Pendiente')
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el clic en una fila de la tabla
  const handleRowClick = (id) => {
    localStorage.setItem('id_programacion', id);
    navigate(`/listadoprogramacion/${id}`);
  };

  // Manejar el clic en el lápiz para editar
  const handleEditClick = (id) => {
    localStorage.setItem('id_programacion', id);
    navigate(`/editar_programacion/${id}`);
  };

  // Manejar clic en el botón "Crear Programación"
  const handleCreateClick = () => {
    navigate('/crearprogramacion');
  };

  return (
    <div className="container listadoprogramacion">
      {/* Encabezado con botón "Crear Programación" */}
      <div className="header-container">
        <h3>CONSULTAR PROGRAMACIÓN</h3>
        <button className="btn crear-btn" onClick={handleCreateClick}>
          Crear Programación
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Estado</th>
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
            <td></td>
            <td></td>
            <td>
              <input
                type="text"
                placeholder="Buscar Lugar"
                value={searchLugar}
                onChange={(e) => setSearchLugar(e.target.value)}
                className="search-input"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Buscar Estado"
                value={searchRealizado}
                onChange={(e) => setSearchRealizado(e.target.value)}
                className="search-input"
              />
            </td>
            <td></td>
          </tr>

          {/* Filas de la programación */}
          {currentItems.map((item) => {
            const rowColor = item.realizado ? 'green-row' : 'red-row';

            return (
              <tr
                key={item.id}
                className={`table-row ${rowColor}`}
                onClick={() => handleRowClick(item.id)}
              >
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.fecha}</td>
                <td>{item.hora}</td>
                <td>{item.lugar}</td>
                <td>{item.realizado ? 'Realizado' : 'Pendiente'}</td>
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
          Página {currentPage} de {Math.ceil(programacionData.length / itemsPerPage)}
        </span>
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(programacionData.length / itemsPerPage)}
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
