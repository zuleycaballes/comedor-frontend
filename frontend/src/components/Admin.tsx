import { useEffect, useState } from "react";
import { getComedorById } from "../api/ComedorAPI";
import { Comedor } from "my-types";
import "./Admin.css";

const AdminPage = () => {
  // Estado para almacenar los datos del comedor
  const [comedor, setComedor] = useState<Comedor | null>(null);

  useEffect(() => {
    // Recuperar el ID del comedor desde localStorage
    const comedorId = localStorage.getItem("comedorId");
    console.log("comedorId desde localStorage:", comedorId);

    if (!comedorId) {
      // Mostrar alerta si no hay sesión activa
      alert("Error: no hay sesión activa");
      return;
    }

    const id = Number(comedorId);
    console.log("ID parseado:", id);

    const fetchData = async () => {
      // Obtener datos del comedor por ID
      const data = await getComedorById(id);
      console.log("Datos del comedor:", data);
      setComedor(data);
    };
    
    fetchData();
  }, []);

  // Mostrar mensaje de carga si los datos aún no están disponibles
  if (!comedor) return <div className="loading">Cargando información del comedor...</div>;

  return (
    <div className="admin-container">
      {/* Mostrar detalles del comedor */}
      <h1 className="admin-title">{comedor.nombre}</h1>
      <div className="admin-details">
        <p className="admin-category"><strong>Dirección:</strong> {comedor.direccion || "No especificada"}</p>
        <p className="admin-category"><strong>Teléfono:</strong> {comedor.telefono}</p>
        <p className="admin-category"><strong>Fecha de creación:</strong> {new Date(comedor.createdAt).toLocaleDateString()}</p>
        <p className="admin-category"><strong>Última actualización:</strong> {new Date(comedor.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default AdminPage;