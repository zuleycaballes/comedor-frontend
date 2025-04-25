import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/ProductAPI";
import { Product } from "my-types";
import "./ProductDetail.css";
import DefaultImage from "../assets/añadir_img.png";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // Obtener el ID del producto 
  const [product, setProduct] = useState<Product | null>(null); // Almacenar el producto
  const [loading, setLoading] = useState<boolean>(true); // Manejar la carga
  const [error, setError] = useState<string | null>(null); // Manejar errores

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          const fetchedProduct = await getProductById(Number(id)); // Llamada a la API para obtener el producto
          setProduct(fetchedProduct);
        }
      } catch (err) {
        setError("No se pudo cargar el producto. Intenta nuevamente."); // Manejo de errores
      } finally {
        setLoading(false); 
      }
    };
    fetchProduct();
  }, [id]); // Ejecutar efecto cuando cambie el ID

  if (loading) return <div>Cargando...</div>; 
  if (error) return <div>{error}</div>; 
  if (!product) return <div>Producto no encontrado.</div>; 
  return (
    <div className="product-detail-container">
      <h1 className="product-title">{product.nombre}</h1> 

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <img
          src={product.imagen ? `${product.imagen}` : DefaultImage} // Mostrar imagen del producto o una por defecto
          alt={`Imagen de ${product.nombre}`}
          style={{
            width: "250px",
            height: "250px",
            objectFit: "contain",
            borderRadius: "1rem"
          }}
        />
      </div>

      <div className="product-details">
        {/* Mostrar detalles del producto */}
        <p className="product-details-category"><strong>ID:</strong> {product.id}</p>
        <p className="product-details-category"><strong>Descripción:</strong> {product.descripcion}</p>
        <p className="product-details-category"><strong>Inventario:</strong> {product.inventario}</p>
        <p className="product-details-category"><strong>Comedor ID:</strong> {product.id_comedor}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;