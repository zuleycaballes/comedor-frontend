"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recharts_1 = require("recharts");
// Renderizar grafico de barras
const InventoryBarChart = ({ data }) => {
    return (<div className="box" style={{ backgroundColor: '#ffffff', marginBottom: '3rem' }}>
      <recharts_1.ResponsiveContainer width="100%" height={400}>
        {/* Configuracion del grafico de barras */}
        <recharts_1.BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
          <recharts_1.CartesianGrid strokeDasharray="3 3"/> 
          <recharts_1.XAxis type="number" tick={{ fontSize: 12 }}/> 
          <recharts_1.YAxis dataKey="nombre" type="category" tick={{ fontSize: 12 }} width={150}/> 
          <recharts_1.Tooltip wrapperStyle={{ fontSize: '14px' }}/> {/* Tooltip para mostrar detalles */}
          <recharts_1.Legend /> 
          <recharts_1.Bar dataKey="inventario" fill="#6FA4D3" barSize={24} radius={[0, 4, 4, 0]} name="Inventario Total"/> 
        </recharts_1.BarChart>
      </recharts_1.ResponsiveContainer>
    </div>);
};
exports.default = InventoryBarChart;
