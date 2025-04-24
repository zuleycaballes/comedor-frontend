import { useState } from "react";
import { createPerson } from "../api/PersonAPI";
import { useNavigate } from "react-router-dom";
import "./FormularioPerson.css";

const FormularioAñadirPersona = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState<"donador" | "consumidor">("donador");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const person = { nombre, apellido, email, rol };
    console.log("Enviando persona:", person);
    await createPerson(person);
    navigate("/personas");
  };

  return (
    <div className="formulario-container">
      <div className="formulario-content">
        <div className="formulario-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="input"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingresa el nombre"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Apellido</label>
                <input
                  type="text"
                  className="input"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                    placeholder="Ingresa el apellido"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa el email"
                  required
                />
              </div>
              <div className="form-field select-wrapper">
                <label className="form-label">Rol</label>
                <div className="select-container">
                    <select
                    className="input select-with-icon"
                    value={rol}
                    onChange={(e) => setRol(e.target.value as "donador" | "consumidor")}
                    required
                    >
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
    </div>
  );
};

export default FormularioAñadirPersona;

