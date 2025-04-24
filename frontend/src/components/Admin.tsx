import { useEffect, useState } from "react";
import { getComedorById } from "../api/ComedorAPI";
import { Comedor } from "my-types";
import "./Admin.css";

const AdminPage = () => {
  const [comedor, setComedor] = useState<Comedor | null>(null);

  useEffect(() => {
    const comedorId = localStorage.getItem("comedorId");
    console.log("comedorId from localStorage:", comedorId);

    if (!comedorId) {
      alert("Error: no hay sesión activa");
      return;
    }

    const id = Number(comedorId);
    console.log("Parsed ID:", id);

    const fetchData = async () => {
      const data = await getComedorById(id);
      console.log("Comedor data:", data);
      setComedor(data);
    };
    
    fetchData();
  }, []);

  if (!comedor) return <div className="loading">Cargando información del comedor...</div>;

  return (
    <div className="admin-container">
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