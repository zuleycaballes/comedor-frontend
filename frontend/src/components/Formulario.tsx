import React, { useState } from 'react';
import { createProduct } from '../api/ProductAPI';
import Image from '../assets/añadir_img.png';

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const handleProductosClick = () => {
    window.location.pathname = '/products';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProduct({ nombre, descripcion, inventario: cantidad });
      alert('Donación registrada con éxito');
      setNombre('');
      setDescripcion('');
      setCantidad(0);
    } catch (error) {
      console.error('Error al registrar la donación:', error);
      alert('Hubo un error al registrar la donación.');
    }
  };

  return (
    <div
      className="container"
      style={{
        fontFamily: 'Jost, sans-serif',
        marginTop: '100px',
        padding: '0 2rem',
      }}
    >
      <h1
        className="title is-3 mb-6"
        style={{ fontWeight: '800', fontSize: '2rem', textAlign: 'left' }}
      >
        Donación
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ width: '300px', height: '300px' }}>
          <img
            src={Image}
            alt="Añadir imagen"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
            }}
          />
        </div>

        <form onSubmit={handleSubmit} style={{ maxWidth: '350px', textAlign: 'left' }}>
          <div className="field" style={{ marginBottom: '40px' }}>
            <label className="label" style={{ fontSize: '1.4rem' }}>Nombre</label>
            <div className="control">
              <input
                className="input"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresa el nombre del producto"
                required
                style={{ width: '500px', height: '40px' }}
              />
            </div>
          </div>

          <div className="field" style={{ marginBottom: '40px' }}>
            <label className="label" style={{ fontSize: '1.4rem' }}>Descripción</label>
            <div className="control">
              <input
                className="input"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción del producto"
                style={{ width: '500px', height: '40px' }}
              />
            </div>
          </div>

          <div className="field" style={{ marginBottom: '40px' }}>
            <label className="label" style={{ fontSize: '1.4rem' }}>Cantidad</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                required
                style={{ width: '500px', height: '40px' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', paddingRight: '200px' }}>
            <div className="control" style={{ marginRight: '10px' }}>
              <button
                type="button"
                className="button"
                onClick={handleProductosClick}
                style={{
                  border: '1px solid #6FA4D3',
                  backgroundColor: '#efefef',
                  color: '#6FA4D3',
                  width: '160px',
                  height: '40px',
                  fontSize: '1.15rem',
                }}
              >
                Cancelar
              </button>
            </div>
            <div className="control">
              <button
                type="submit"
                className="button"
                style={{
                  border: '1px solid #6FA4D3',
                  backgroundColor: 'transparent',
                  color: '#6FA4D3',
                  width: '160px',
                  height: '40px',
                  fontSize: '1.15rem',
                }}
              >
                Donar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;