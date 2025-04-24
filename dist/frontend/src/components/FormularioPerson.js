"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./FormularioPerson.css");
const FormularioPersona = ({ initialData, onSubmit, submitLabel, }) => {
    // Estados para los campos del formulario
    const [nombre, setNombre] = (0, react_1.useState)('');
    const [apellido, setApellido] = (0, react_1.useState)('');
    const [edad, setEdad] = (0, react_1.useState)(0);
    const [email, setEmail] = (0, react_1.useState)('');
    const [rol, setRol] = (0, react_1.useState)("donador");
    // Efecto para inicializar los datos si se proporcionan
    (0, react_1.useEffect)(() => {
        if (initialData) {
            setNombre(initialData.nombre);
            setApellido(initialData.apellido);
            setEdad(initialData.edad);
            setEmail(initialData.email);
            setRol(initialData.rol);
        }
    }, [initialData]);
    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const id_comedor = Number(localStorage.getItem("comedorId"));
        if (!id_comedor) {
            alert("No hay sesión activa.");
            return;
        }
        onSubmit({
            nombre,
            apellido,
            edad,
            email,
            rol,
            id_comedor,
        });
    };
    return (<div className="formulario-container">
      <div className="formulario-content">
        <form onSubmit={handleSubmit} className="formulario-form">
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Nombre</label>
              <input className="input" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            </div>
            <div className="form-field">
              <label className="form-label">Apellido</label>
              <input className="input" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required/>
            </div>
            <div className="form-field">
              <label className="form-label">Edad</label>
              <input className="input" type="number" value={edad} onChange={(e) => setEdad(Number(e.target.value))} required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Correo Electrónico</label>
              <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-field select-wrapper">
              <label className="form-label">Rol</label>
              <div className="select-container">
                <select className="input select-with-icon" value={rol} onChange={(e) => setRol(e.target.value)} required>
                  <option value="donador">Donador</option>
                  <option value="consumidor">Consumidor</option>
                </select>
                <span className="select-icon">▼</span>
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={() => window.history.back()}>
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = FormularioPersona;
