import React from 'react';
import {
  PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend
} from 'recharts';
import { Product } from 'my-types';

interface Props {
  data: Product[];
}

const pieColors = ["#6FA4D3", "#A8D0DB", "#BFD8EF", "#89B4D2", "#528AAE"];

const LowInventoryPieChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="box" style={{ backgroundColor: '#ffffff' }}>
      <h2 className="title is-5 has-text-weight-semibold has-text-grey-dark mb-4">
        Productos con Bajo Inventario (≤ 10)
      </h2>
      {data.length === 0 ? (
        // Mensaje cuando no hay datos
        <p className="has-text-centered has-text-grey">
          No hay productos con inventario menor o igual a 10.
        </p>
      ) : (
        // Gráfico pie responsivo
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="inventario"
              nameKey="nombre"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={({ name }) => name}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            {/* Tooltip para mostrar información al pasar el mouse */}
            <Tooltip wrapperStyle={{ fontSize: '14px' }} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default LowInventoryPieChart;