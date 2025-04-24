"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const pieColors = ["#6FA4D3", "#A8D0DB", "#BFD8EF", "#89B4D2", "#528AAE"];
const LowInventoryPieChart = ({ data }) => {
    return (<div className="box" style={{ backgroundColor: '#ffffff' }}>
      <h2 className="title is-5 has-text-weight-semibold has-text-grey-dark mb-4">
        Productos con Bajo Inventario (≤ 10)
      </h2>
      {data.length === 0 ? (<p className="has-text-centered has-text-grey">
          No hay productos con inventario menor o igual a 10.
        </p>) : (<recharts_1.ResponsiveContainer width="100%" height={400}>
          <recharts_1.PieChart>
            <recharts_1.Pie data={data} dataKey="inventario" nameKey="nombre" cx="50%" cy="50%" outerRadius={120} label={({ name }) => name}>
              {data.map((_, index) => (<recharts_1.Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]}/>))}
            </recharts_1.Pie>
            <recharts_1.Tooltip wrapperStyle={{ fontSize: '14px' }}/>
            <recharts_1.Legend />
          </recharts_1.PieChart>
        </recharts_1.ResponsiveContainer>)}
    </div>);
};
exports.default = LowInventoryPieChart;
