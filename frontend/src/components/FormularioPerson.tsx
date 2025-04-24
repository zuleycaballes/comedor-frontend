import { useState, useEffect } from "react";
import "./FormularioPerson.css"; // Asegúrate que este path sea correcto

interface FormularioPersonaProps {
  initialData?: {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    rol: "donador" | "consumidor";
    id_comedor: number;
  };
  onSubmit: (person: {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    rol: "donador" | "consumidor";
    id_comedor: number;
  }) => void;
  submitLabel: string;
}

const FormularioPersona: React.FC<FormularioPersonaProps> = ({
  initialData,
  onSubmit,
  submitLabel,
}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState(0);
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState("donador" as "donador" | "consumidor");
  const [id_comedor, setIdComedor] = useState(1);

  useEffect(() => {
    if (initialData) {
      setNombre(initialData.nombre);
      setApellido(initialData.apellido);
      setEdad(initialData.edad);
      setEmail(initialData.email);
      setRol(initialData.rol);
      setIdComedor(initialData.id_comedor);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      nombre,
      apellido,
      edad,
      email,
      rol,
      id_comedor,
    });
  };

  return (
    <div className="formulario-container">
      <div className="formulario-content">
        <form onSubmit={handleSubmit} className="formulario-form">

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Nombre</label>
              <input
                className="input"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label">Apellido</label>
              <input
                className="input"
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label">Edad</label>
              <input
                className="input"
                type="number"
                value={edad}
                onChange={(e) => setEdad(Number(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Correo Electrónico</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Comedor</label>
              <input
                className="input"
                type="number"
                value={id_comedor}
                onChange={(e) => setIdComedor(Number(e.target.value))}
                required
              />
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
    </div>
  );
};

export default FormularioPersona;






