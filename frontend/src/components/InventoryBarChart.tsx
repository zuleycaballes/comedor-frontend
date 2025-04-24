import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Product } from 'my-types';

interface Props {
  data: Product[];
}

const InventoryBarChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="box" style={{ backgroundColor: '#ffffff', marginBottom: '3rem' }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis dataKey="nombre" type="category" tick={{ fontSize: 12 }} width={150} />
          <Tooltip wrapperStyle={{ fontSize: '14px' }} />
          <Legend />
          <Bar dataKey="inventario" fill="#6FA4D3" barSize={24} radius={[0, 4, 4, 0]} name="Inventario Total" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryBarChart;