import React, { useState } from 'react';
import { createProduct } from '../api/ProductAPI';

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [inventario, setInventario] = useState(0);
  const [idComedor, setIdComedor] = useState(1); // puedes ajustar el valor default

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProduct({ nombre, descripcion, inventario, id_comedor: idComedor });
      alert('Producto creado con éxito');
      setNombre('');
      setDescripcion('');
      setInventario(0);
    } catch (error) {
      console.error('Error al crear producto:', error);
      alert('Hubo un error al crear el producto.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Crear producto</h2>
      <div>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Descripción:</label>
        <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </div>
      <div>
        <label>Inventario:</label>
        <input
          type="number"
          value={inventario}
          onChange={(e) => setInventario(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>ID del comedor:</label>
        <input
          type="number"
          value={idComedor}
          onChange={(e) => setIdComedor(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default Formulario;
