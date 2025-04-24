import { useState, useEffect } from 'react';
import Image from '../assets/añadir_img.png';
import './Formulario.css'; // Asegúrate de importar el archivo CSS

interface FormularioProps {
  product?: { nombre: string; descripcion: string; inventario: number };  // Si estamos editando, el producto estará disponible
  onSubmit: (product: { nombre: string; descripcion: string; inventario: number }) => void;  // Función que maneja el envío
  buttonText: string;  // Texto del botón, cambia según si es 'Donar' o 'Guardar'
}

const Formulario: React.FC<FormularioProps> = ({ product, onSubmit, buttonText }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    if (product) {
      setNombre(product.nombre);
      setDescripcion(product.descripcion);
      setCantidad(product.inventario);
    }
  }, [product]);

  const handleProductosClick = () => {
    window.location.pathname = '/products';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onSubmit({ nombre, descripcion, inventario: cantidad });
      setNombre('');
      setDescripcion('');
      setCantidad(0);
    } catch (error) {
      console.error('Error al procesar el producto:', error);
      alert('Hubo un error al procesar el producto.');
    }
  };

  return (
    <div className="formulario-container">

      <div className="formulario-content">
        <div className="formulario-image">
          <img src={Image} alt="Añadir imagen" />
        </div>

        <form onSubmit={handleSubmit} className="formulario-form">
          <div className="form-field">
            <label className="form-label">Nombre</label>
            <div className="form-control">
              <input
                className="input"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresa el nombre del producto"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Descripción</label>
            <div className="form-control">
              <input
                className="input"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción del producto"
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Cantidad</label>
            <div className="form-control">
              <input
                className="input"
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              type="button"
              className="cancel-button"
              onClick={handleProductosClick}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="submit-button"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;









