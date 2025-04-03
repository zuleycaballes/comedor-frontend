// script.js

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
    output.textContent = JSON.stringify(data, null, 2);
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
  const output = document.getElementById('outputGetById');
  output.textContent = 'Cargando...';
  try {
    const res = await fetch(`${apiBaseUrl}/${entity}/${id}`);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
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
    output.textContent = JSON.stringify(data, null, 2);
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
  // Se omite el campo id, ya que se obtiene de updateId
  for (let [key, value] of formData.entries()) {
    if (key !== 'updateId' && value !== "") {
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
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
});

// ------------------------
// Eliminar un elemento (DELETE /{entidad}/{id})
document.getElementById('formDelete').addEventListener('submit', async (e) => {
  e.preventDefault();
  const entity = getSelectedEntity();
  const id = document.getElementById('deleteId').value.trim();
  const output = document.getElementById('outputDelete');
  output.textContent = 'Eliminando elemento...';
  try {
    // Para eliminar, según tus rutas, se usa DELETE sin pasar id en el body,
    // pero en el controlador de comedor y person se usa DELETE sin id en URL.
    // Aquí se envía la petición con id en la URL.
    const res = await fetch(`${apiBaseUrl}/${entity}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      // Algunos controladores usan el id en el body, si es el caso descomenta la siguiente línea:
      // body: JSON.stringify({ id })
    });
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
});
