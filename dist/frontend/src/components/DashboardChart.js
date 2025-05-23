"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const InventoryBarChart_1 = __importDefault(require("../components/InventoryBarChart"));
const LowInventoryPieChart_1 = __importDefault(require("../components/LowInventoryPieChart"));
const DashboardChart = () => {
    // Estado para almacenar todos los productos
    const [productos, setProductos] = (0, react_1.useState)([]);
    // Estado para almacenar productos con bajo inventario
    const [bajoInventario, setBajoInventario] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        // Obtener comedorId desde localStorage
        const comedorId = Number(localStorage.getItem("comedorId"));
        if (!comedorId)
            return;
        axios_1.default.get("http://localhost:3000/api/product")
            .then(res => {
            const todos = res.data.payload;
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
    return (<div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
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
          <InventoryBarChart_1.default data={productos}/>
        </div>

        <div style={boxStyle}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#363636", marginBottom: "1rem" }}>
            Productos con Bajo Inventario (≤ 10)
          </h2>
          <LowInventoryPieChart_1.default data={bajoInventario}/>
        </div>
      </div>
    </div>);
};
exports.default = DashboardChart;
