import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllProducts, modifyProduct } from "../api/ProductAPI";
import { Product } from "my-types";
import Navbar from "../components/Navbar";
import Formulario from "../components/Formulario";

const EditarPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtener el ID del producto
  const navigate = useNavigate(); // Navegación para redirigir
  const [product, setProduct] = useState<Product | null>(null); 

  useEffect(() => {
    // Obtener todos los productos y buscar el producto por ID
    getAllProducts().then((products) => {
      const found = products.find((p) => p.id === Number(id));
      if (found) {
        console.log("Producto encontrado:", found); // Log para depuración
        setProduct(found);
      }
    });
  }, [id]);

  // Manejar la edición del producto
  const handleEditProduct = async (updatedProduct: { nombre: string; descripcion: string; inventario: number }) => {
    if (product) {
      const updated = { ...product, ...updatedProduct }; // Actualizar los datos del producto
      await modifyProduct(updated.id, updated); // Llamada a la API para actualizar
      navigate("/products"); // Redirigir a la lista de productos
    }
  };

  if (!product) return <div>Cargando...</div>; // Mostrar mensaje mientras se carga el producto

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
        product={{ ...product, imagen: product.imagen ?? undefined }} // Producto a editar
        onSubmit={handleEditProduct} // Manejar el envío del formulario
        buttonText="Guardar" 
      />
    </div>
  );
};

export default EditarPage;