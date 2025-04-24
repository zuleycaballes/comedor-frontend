import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/ProductAPI";
import { Product } from "my-types";
import "./ProductDetail.css";
import DefaultImage from "../assets/añadir_img.png";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          const fetchedProduct = await getProductById(Number(id));
          setProduct(fetchedProduct);
        }
      } catch (err) {
        setError("No se pudo cargar el producto. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Producto no encontrado.</div>;

  return (
    <div className="product-detail-container">
      <h1 className="product-title">{product.nombre}</h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <img
          src={product.imagen ? `http://localhost:3000${product.imagen}` : DefaultImage}
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
        <p className="product-details-category"><strong>ID:</strong> {product.id}</p>
        <p className="product-details-category"><strong>Descripción:</strong> {product.descripcion}</p>
        <p className="product-details-category"><strong>Inventario:</strong> {product.inventario}</p>
        <p className="product-details-category"><strong>Comedor ID:</strong> {product.id_comedor}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;