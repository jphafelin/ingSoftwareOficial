import React from "react";


export const Users = () => {
  const host= process.env.BACKEND_URL;
  console.log (host);

function editUser(event) {
    const userId = event.target.getAttribute('data-user-id');
    // código para editar el usuario con el ID userId
  }
  
  function deleteUser(event) {
    const userId = event.target.getAttribute('data-user-id');
    // código para borrar el usuario con el ID userId
  }

  const Url = host+"/api/user"
fetch(Url)
  .then(response => response.json())
  .then(data => {
    if (data.message === 'ok') {
      const results = data.results;
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');

      // crea las filas de encabezado
      const headRow = document.createElement('tr');
      const idHead = document.createElement('th');
      idHead.textContent = 'ID';
      const emailHead = document.createElement('th');
      emailHead.textContent = 'Email';
      const activeHead = document.createElement('th');
      activeHead.textContent = 'Active';
      const editHead = document.createElement('th');
      editHead.textContent = 'Editar';
      const deleteHead = document.createElement('th');
      deleteHead.textContent = 'Borrar';

      headRow.appendChild(idHead);
      headRow.appendChild(emailHead);
      headRow.appendChild(activeHead);
      headRow.appendChild(editHead);
      headRow.appendChild(deleteHead);
      thead.appendChild(headRow);

      // crea las filas de datos
      for (const result of results) {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = result.id;
        const emailCell = document.createElement('td');
        emailCell.textContent = result.email;
        const activeCell = document.createElement('td');
        activeCell.textContent = result.is_active;
        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.setAttribute('data-user-id', result.id);
        editButton.addEventListener('click', editUser);
        editCell.appendChild(editButton);
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.setAttribute('data-user-id', result.id);
        deleteButton.addEventListener('click', deleteUser);
        deleteCell.appendChild(deleteButton);

        row.appendChild(idCell);
        row.appendChild(emailCell);
        row.appendChild(activeCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);
        tbody.appendChild(row);
      }

      table.appendChild(thead);
      table.appendChild(tbody);
      document.body.appendChild(table);
    } else {
      console.error(data.message);
    }
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <div>
      <h1>User</h1>
      <div>{Users}</div>
    </div>
  );
}


