import { useEffect, useState } from "react";
import { Product } from "my-types";
import axios from "axios";
import InventoryBarChart from "../components/InventoryBarChart";
import LowInventoryPieChart from "../components/LowInventoryPieChart";

const DashboardChart = () => {
  // Estado para almacenar todos los productos
  const [productos, setProductos] = useState<Product[]>([]);
  // Estado para almacenar productos con bajo inventario
  const [bajoInventario, setBajoInventario] = useState<Product[]>([]);

  useEffect(() => {
    // Obtener comedorId desde localStorage
    const comedorId = Number(localStorage.getItem("comedorId"));
    if (!comedorId) return;

    axios.get("http://localhost:3000/api/product")
      .then(res => {
        const todos = res.data.payload as Product[];
        // Filtrar productos por comedorId
        const filtrados = todos.filter(p => p.id_comedor === comedorId);
        setProductos(filtrados);
        // Filtrar productos con inventario <= 10
        setBajoInventario(filtrados.filter(p => Number(p.inventario) <= 10));
      })
      .catch(err => console.error("Error al obtener productos:", err));
  }, []);

  const boxStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "1.5rem",
    marginBottom: "1.5rem"
  };

  const boxHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem"
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div style={{ padding: "2rem", backgroundColor: "#ffffff", fontFamily: "Jost, sans-serif", marginTop: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 500, marginBottom: "1rem", marginTop: "2rem", color: "#363636" }}>
          Dashboard
        </h1>

        <div style={boxStyle}>
          <div style={boxHeaderStyle}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#363636" }}>Inventario por Producto</h2>
            <div style={{ fontSize: "1rem", color: "#6FA4D3", fontWeight: 500 }}>
              Total de productos: {productos.length}
            </div>
          </div>
          <InventoryBarChart data={productos} />
        </div>

        <div style={boxStyle}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#363636", marginBottom: "1rem" }}>
            Productos con Bajo Inventario (≤ 10)
          </h2>
          <LowInventoryPieChart data={bajoInventario} />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;