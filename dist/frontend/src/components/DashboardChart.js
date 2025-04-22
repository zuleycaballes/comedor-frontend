"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const recharts_1 = require("recharts");
const axios_1 = __importDefault(require("axios"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const DashboardChart = () => {
    const [productos, setProductos] = (0, react_1.useState)([]);
    const [bajoInventario, setBajoInventario] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default.get("http://localhost:3000/api/product")
            .then(res => {
            setProductos(res.data.payload);
            const filtrados = res.data.payload.filter((p) => { var _a; return Number((_a = p.inventario) === null || _a === void 0 ? void 0 : _a.toString().trim()) < 15; });
            console.log("Productos con inventario < 15:", filtrados);
            setBajoInventario(filtrados);
        })
            .catch(err => console.error("Error al obtener productos:", err));
    }, []);
    const pieColors = ["#6FA4D3", "#A8D0DB", "#BFD8EF", "#89B4D2", "#528AAE"];
    return (<div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Navbar_1.default />
      <div style={{ padding: "2rem", backgroundColor: "#ffffff", fontFamily: "Jost, sans-serif", marginTop: "100px" }}>

        {/* Resumen Total */}
        <div className="box" style={{
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem"
        }}>
          <h2 className="title is-4 has-text-weight-semibold has-text-grey-dark">
            Inventario por Producto
          </h2>
          <div style={{ fontSize: "1.1rem", fontWeight: 500, color: "#6FA4D3" }}>
            Total de productos: {productos.length}
          </div>
        </div>

        {/* Gráfico 1 */}
        <div className="box" style={{ backgroundColor: "#ffffff", marginBottom: "3rem" }}>
          <recharts_1.ResponsiveContainer width="100%" height={400}>
            <recharts_1.BarChart data={productos} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis type="number" tick={{ fontSize: 12 }}/>
              <recharts_1.YAxis dataKey="descripcion" type="category" tick={{ fontSize: 12 }} width={150}/>
              <recharts_1.Tooltip wrapperStyle={{ fontSize: "14px" }}/>
              <recharts_1.Legend />
              <recharts_1.Bar dataKey="inventario" fill="#6FA4D3" barSize={24} radius={[0, 4, 4, 0]} name="Inventario Total"/>
            </recharts_1.BarChart>
          </recharts_1.ResponsiveContainer>
        </div>

        {/* Gráfico 2 (Tipo Pie) */}
        <div className="box" style={{ backgroundColor: "#ffffff" }}>
          <h2 className="title is-5 has-text-weight-semibold has-text-grey-dark mb-4">
            Productos con Bajo Inventario (≤ 15)
          </h2>
          {bajoInventario.length === 0 ? (<p className="has-text-centered has-text-grey">
              No hay productos con inventario menor o igual a 15.
            </p>) : (<recharts_1.ResponsiveContainer width="100%" height={400}>
              <recharts_1.PieChart>
                <recharts_1.Pie data={bajoInventario} dataKey="inventario" nameKey="descripcion" cx="50%" cy="50%" outerRadius={120} label={({ name }) => name}>
                  {bajoInventario.map((_, index) => (<recharts_1.Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]}/>))}
                </recharts_1.Pie>
                <recharts_1.Tooltip wrapperStyle={{ fontSize: "14px" }}/>
                <recharts_1.Legend />
              </recharts_1.PieChart>
            </recharts_1.ResponsiveContainer>)}
        </div>

      </div>
    </div>);
};
exports.default = DashboardChart;
