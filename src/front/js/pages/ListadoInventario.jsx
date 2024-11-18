import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/listadoinventario.css';

export const ListadoInventario = () => {
  const [searchElemento, setSearchElemento] = useState('');
  const [searchLugar, setSearchLugar] = useState('');
  const [searchEstado, setSearchEstado] = useState('');

  const [inventarioData, setInventarioData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
  const navigate = useNavigate();

  const host = process.env.BACKEND_URL;

  const requestOptions = {
    method: 'GET',
  };

  // Fetch de los datos del inventario
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${host}/api/inventario`, { ...requestOptions, signal })
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.results.sort((a, b) => b.id - a.id);
        setInventarioData(sortedData);
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

  const currentItems = inventarioData
    .filter((item) => {
      const searchRegexElemento = new RegExp(searchElemento, 'i');
      const searchRegexLugar = new RegExp(searchLugar, 'i');
      const searchRegexEstado = new RegExp('^' + searchEstado, 'i');

      return (
        searchRegexElemento.test(item.elemento) &&
        searchRegexLugar.test(item.lugar) &&
        searchRegexEstado.test(item.estado)
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el clic en una fila de la tabla
  const handleRowClick = (id) => {
    localStorage.setItem('id_inventario', id);
    navigate(`/listadoinventario/${id}`);
  };

  // Manejar el clic en el lápiz para editar
  const handleEditClick = (id) => {
    localStorage.setItem('id_inventario', id);
    navigate(`/editar_inventario/${id}`);
  };

  return (
    <div className="container listadoinventario">
      <h3>CONSULTAR INVENTARIO</h3>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Elemento</th>
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
                placeholder="Buscar Elemento"
                value={searchElemento}
                onChange={(e) => setSearchElemento(e.target.value)}
                className="search-input"
              />
            </td>
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
                value={searchEstado}
                onChange={(e) => setSearchEstado(e.target.value)}
                className="search-input"
              />
            </td>
            <td></td>
          </tr>

          {/* Filas del inventario */}
          {currentItems.map((item) => {
            const rowColor = item.estado === 'VIGENTE' ? 'green-row' : item.estado === 'NO VIGENTE' ? 'red-row' : '';

            return (
              <tr
                key={item.id}
                className={`table-row ${rowColor}`}
                onClick={() => handleRowClick(item.id)}
              >
                <td>{item.id}</td>
                <td>{item.elemento}</td>
                <td>{item.lugar}</td>
                <td>{item.estado}</td>
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
          Página {currentPage} de {Math.ceil(inventarioData.length / itemsPerPage)}
        </span>
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(inventarioData.length / itemsPerPage)}
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
