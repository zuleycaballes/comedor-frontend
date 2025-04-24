import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllProducts, updateProduct } from "../api/ProductAPI";
import { Product } from "my-types";
import Navbar from "../components/Navbar";
import Formulario from "../components/Formulario";

const EditarPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getAllProducts().then((products) => {
      const found = products.find((p) => p.id === Number(id));
      if (found) setProduct(found);
    });
  }, [id]);

  const handleEditProduct = async (updatedProduct: { nombre: string; descripcion: string; inventario: number }) => {
    if (product) {
      const updated = { ...product, ...updatedProduct };
      await updateProduct(updated.id, updated);
      navigate("/products");
    }
  };

  if (!product) return <div>Cargando...</div>;

  return (
      <div
      className="container"
      style={{
      fontFamily: "Jost, sans-serif",
      marginTop: "100px",
      }}
    >
      <Navbar />
      <h1 className="title is-3 mb-4 has-text-left">Editar Producto</h1>
        <Formulario
          product={product}
          onSubmit={handleEditProduct}
          buttonText="Guardar"
        />
      </div>
  );
};

export default EditarPage;



