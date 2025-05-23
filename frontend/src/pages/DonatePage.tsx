import { createProduct } from "../api/ProductAPI";
import { useNavigate } from "react-router-dom";
import Forms from "../components/Forms";
import Navbar from "../components/Navbar";

const DonarPage: React.FC = () => {
  const navigate = useNavigate(); // Navegación para redirigir

  // Manejar la donación de un producto
  const handleDonar = async (product: { nombre: string; descripcion: string; inventario: number; imagen?: string }) => {
    try {
      await createProduct(product);
      navigate("/products");
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert("Hubo un error al crear el producto.");
    }
  };
  

  return (
    <div
      className="container"
      style={{
        fontFamily: "Jost, sans-serif",
        marginTop: "100px",
      }}
    >
      <Navbar />
      <h1 className="title is-3 mb-4 has-text-left">Donar Producto</h1> 
      <Forms onSubmit={handleDonar} buttonText="Donar" />
    </div>
  );
};

export default DonarPage;