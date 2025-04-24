import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm: React.FC = () => {
  // Estados para usuario y contraseña
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Obtener datos de los comedores desde la API
      const res = await axios.get(`http://localhost:3000/api/comedor`);
      const comedores = res.data.payload;

      // Buscar el comedor que coincida con el usuario ingresado
      const comedor = comedores.find((comedor: any) => comedor.nombre === usuario);

      // Validar usuario y contraseña
      if (comedor && password === "123") {
        localStorage.setItem("comedorId", comedor.id.toString()); // Guardar ID en localStorage
        navigate("/dashboard"); // Redirigir al dashboard
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      // Manejar errores en la verificación
      console.error("Error al verificar el usuario:", error);
      alert("Error al intentar iniciar sesión");
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
