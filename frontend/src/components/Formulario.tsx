import { useState, useEffect } from 'react';
import DefaultImage from '../assets/añadir_img.png';
import './Formulario.css';
import { createProduct } from "../api/ProductAPI";
import ImageUpload from './ImageUpload';

interface FormularioProps {
  product?: { nombre: string; descripcion: string; inventario: number; imagen?: string };
  onSubmit: (product: { nombre: string; descripcion: string; inventario: number; imagen?: string }) => void;
  buttonText: string;
}

const Formulario: React.FC<FormularioProps> = ({ product, buttonText }) => {
  // Estados para manejar los valores del formulario
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [imagenUrl, setImagenUrl] = useState<string | null>(null);

  // Inicializar los valores si se recibe un producto
  useEffect(() => {
    if (product) {
      setNombre(product.nombre);
      setDescripcion(product.descripcion);
      setCantidad(product.inventario);
      setImagenUrl(product.imagen ? `http://localhost:3000${product.imagen}` : '');
    }
  }, [product]);

  // Redirige a la página de productos
  const handleProductosClick = () => {
    window.location.pathname = '/products';
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const comedorId = Number(localStorage.getItem("comedorId"));
    if (!comedorId) {
      alert("Error: no hay sesión activa");
      return;
    }

    try {
      // Llama a la API para crear el producto
      await createProduct({
        nombre,
        descripcion,
        inventario: cantidad,
        id_comedor: comedorId,
        imagen: imagenUrl ? imagenUrl.replace("http://localhost:3000", "") : null // guarda solo la ruta relativa
      });
      alert("Donación registrada con éxito");
      // Resetea los valores del formulario
      setNombre('');
      setDescripcion('');
      setCantidad(0);
      setImagenUrl('');
    } catch (error) {
      alert("Hubo un error al registrar la donación.");
    }
  };

  return (
    <div className="formulario-container">
      <div className="formulario-content">
        <div className="formulario-image">
          <img
            src={imagenUrl || DefaultImage}
            alt="Vista previa"
            style={{ width: "350px", height: "300px", objectFit: "contain", borderRadius: "1rem" }}
          />
          <ImageUpload onUpload={(url) => setImagenUrl(`http://localhost:3000${url}`)} />
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
