import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí luego se hará la verificación en base de datos
    if (usuario && password) {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
      <h1 style={{ fontWeight: 600, fontSize: "1.5rem", textAlign: "center", marginBottom: "0.5rem" }}>
        El Comedor
      </h1>
      <p style={{ textAlign: "center", color: "#aaa", marginBottom: "2rem" }}>
        Ingresa tus datos
      </p>

      <div className="field">
        <label className="label">Usuario</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Contraseña</label>
        <div className="control">
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="login-button-container">
        <button type="submit" className="login-button">
            Iniciar Sesión
        </button>
      </div>

    </form>
  );
};

export default LoginForm;