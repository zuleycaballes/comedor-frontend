// URL base de la API
const apiBaseUrl = 'http://localhost:3000/api';

// Definición de campos para cada entidad en CREATE y UPDATE
const entityFields = {
  comedor: [
    { name: "nombre", placeholder: "Nombre", type: "text", required: true },
    { name: "direccion", placeholder: "Dirección", type: "text", required: false },
    { name: "telefono", placeholder: "Teléfono", type: "text", required: true }
  ],
  person: [
    { name: "id_comedor", placeholder: "ID Comedor", type: "number", required: true },
    { name: "nombre", placeholder: "Nombre", type: "text", required: true },
    { name: "apellido", placeholder: "Apellido", type: "text", required: true },
    { name: "edad", placeholder: "Edad", type: "number", required: true },
    { name: "email", placeholder: "Email", type: "email", required: false },
    { name: "rol", placeholder: "Rol (donador/consumidor)", type: "text", required: true }
  ],
  product: [
    { name: "id_comedor", placeholder: "ID Comedor", type: "number", required: true },
    { name: "nombre", placeholder: "Nombre", type: "text", required: true },
    { name: "descripcion", placeholder: "Descripción", type: "text", required: false },
    { name: "inventario", placeholder: "Inventario", type: "number", required: true }
  ]
};

// Función para obtener la entidad seleccionada
function getSelectedEntity() {
  return document.getElementById('entitySelect').value;
}

// Función para generar los campos dinámicos en los formularios
function generateFields(containerId, entity) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Limpiar el contenido
  entityFields[entity].forEach(field => {
    const input = document.createElement('input');
    input.name = field.name;
    input.placeholder = field.placeholder;
    input.type = field.type;
    if (field.required) input.required = true;
    container.appendChild(input);
  });
}

// Actualizar formularios al cambiar la entidad
document.getElementById('entitySelect').addEventListener('change', () => {
  const entity = getSelectedEntity();
  generateFields("createFields", entity);
  generateFields("updateFields", entity);
});

// Al cargar el DOM se generan los campos para la entidad por defecto
document.addEventListener('DOMContentLoaded', () => {
  generateFields("createFields", getSelectedEntity());
  generateFields("updateFields", getSelectedEntity());
});

// Función para mostrar/ocultar secciones según la acción seleccionada
function showSection(sectionId) {
  document.querySelectorAll('main .section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

// Eventos del menú lateral
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const section = e.target.getAttribute('data-section');
    showSection(section);
  });
});

// Función para renderizar el JSON como tabla SQL
function renderJSONTable(data) {
  if (!data.payload || !Array.isArray(data.payload)) {
    return "<p>No hay datos para mostrar.</p>";
  }

  const items = data.payload;
  if (items.length === 0) {
    return "<p>La tabla está vacía.</p>";
  }

  // Encabezados de la tabla (tomados de las llaves del primer objeto)
  const headers = Object.keys(items[0]);
  let table = `<table class="json-table"><thead><tr>`;
  headers.forEach(header => {
    table += `<th>${header}</th>`;
  });
  table += `</tr></thead><tbody>`;

  // Crear las filas de la tabla
  items.forEach(item => {
    table += `<tr>`;
    headers.forEach(header => {
      const value = (item[header] === null || item[header] === undefined) ? "NULL" : item[header];
      table += `<td>${value}</td>`;
    });
    table += `</tr>`;
  });

  table += `</tbody></table>`;
  return table;
}

// ------------------------
// Obtener todos los elementos (GET /{entidad})
document.getElementById('btnGetAll').addEventListener('click', async () => {
  const entity = getSelectedEntity();
  const output = document.getElementById('outputGetAll');
  output.textContent = 'Cargando...';
  try {
    const res = await fetch(`${apiBaseUrl}/${entity}`);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    // Mostrar mensaje y tabla en lugar de JSON crudo
    output.innerHTML = `<h3>${data.message}</h3>` + renderJSONTable(data);
  } catch (err) {
    output.textContent = err.message;
  }
});

// ------------------------
// Obtener un elemento por ID (GET /{entidad}/{id})
document.getElementById('formGetById').addEventListener('submit', async (e) => {
    e.preventDefault();
    const entity = getSelectedEntity();
    const id = document.getElementById('getId').value.trim();
    console.log("ID obtenido:", id);
    // También imprime la URL que se va a llamar
    const url = `${apiBaseUrl}/${entity}/${id}`;
    console.log("URL fetch:", url);
    
    const output = document.getElementById('outputGetById');
    output.textContent = 'Cargando...';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
      const data = await res.json();
      
      // Si el payload no es un arreglo, conviértelo en uno
      if (!Array.isArray(data.payload)) {
        data.payload = [data.payload];
      }
      
      output.innerHTML = `<h3>${data.message}</h3>` + renderJSONTable(data);
    } catch (err) {
      output.textContent = err.message;
    }
  });
  

// ------------------------
// Crear un nuevo elemento (POST /{entidad})
document.getElementById('formCreate').addEventListener('submit', async (e) => {
    e.preventDefault();
    const entity = getSelectedEntity();
    const output = document.getElementById('outputCreate');
    output.textContent = 'Creando elemento...';
  
    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const bodyData = {};
    for (let [key, value] of formData.entries()) {
      // Convertir a número si es campo numérico
      bodyData[key] = (entityFields[entity].find(f => f.name === key).type === "number")
        ? Number(value)
        : value;
    }
  
    try {
      const res = await fetch(`${apiBaseUrl}/${entity}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
      const data = await res.json();
  
      // Si el payload es un objeto en lugar de un array, lo convertimos en array
      if (data.payload && !Array.isArray(data.payload)) {
        data.payload = [data.payload];
      }
  
      // Ahora usamos renderJSONTable para mostrarlo en tabla
      output.innerHTML = `<h3>${data.message}</h3>` + renderJSONTable(data);
    } catch (err) {
      output.textContent = err.message;
    }
  });  

// ------------------------
// Actualizar un elemento (PATCH /{entidad}/{id})
document.getElementById('formUpdate').addEventListener('submit', async (e) => {
    e.preventDefault();
    const entity = getSelectedEntity();
    const id = document.getElementById('updateId').value.trim();
    const output = document.getElementById('outputUpdate');
    output.textContent = 'Actualizando elemento...';
  
    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const bodyData = {};
    for (let [key, value] of formData.entries()) {
      if (key !== 'updateId' && value !== "") {
        // Convertir a número si es campo numérico
        bodyData[key] = (entityFields[entity].find(f => f.name === key).type === "number")
          ? Number(value)
          : value;
      }
    }
  
    try {
      const res = await fetch(`${apiBaseUrl}/${entity}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
      const data = await res.json();
  
      // Envolver payload en un array si es un objeto
      if (data.payload && !Array.isArray(data.payload)) {
        data.payload = [data.payload];
      }
  
      // Mostrar la tabla en lugar de JSON crudo
      output.innerHTML = `<h3>${data.message}</h3>` + renderJSONTable(data);
    } catch (err) {
      output.textContent = err.message;
    }
  });  

// ------------------------
// Eliminar un elemento (DELETE /{entidad})
document.getElementById('formDelete').addEventListener('submit', async (e) => {
    e.preventDefault();
    const entity = getSelectedEntity();
    const id = document.getElementById('deleteId').value.trim();
    const output = document.getElementById('outputDelete');
    output.textContent = 'Eliminando elemento...';
    try {
      // Para todas las entidades, la ruta DELETE es sin id en la URL
      const url = `${apiBaseUrl}/${entity}`;
      const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }) // Enviamos el id en el body
      };
      
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
      const data = await res.json();
      output.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      output.textContent = err.message;
    }
  });  