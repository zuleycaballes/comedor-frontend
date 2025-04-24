"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const PersonAPI_1 = require("../api/PersonAPI");
const react_router_dom_1 = require("react-router-dom");
require("./FormularioPerson.css");
const FormularioAñadirPersona = () => {
    const [nombre, setNombre] = (0, react_1.useState)("");
    const [apellido, setApellido] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [rol, setRol] = (0, react_1.useState)("donador");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const person = { nombre, apellido, email, rol };
        console.log("Enviando persona:", person);
        yield (0, PersonAPI_1.createPerson)(person);
        navigate("/personas");
    });
    return (<div className="formulario-container">
      <div className="formulario-content">
        <div className="formulario-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Nombre</label>
                <input type="text" className="input" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa el nombre" required/>
              </div>
              <div className="form-field">
                <label className="form-label">Apellido</label>
                <input type="text" className="input" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Ingresa el apellido" required/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Email</label>
                <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa el email" required/>
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
                Añadir Persona
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>);
};
exports.default = FormularioAñadirPersona;
