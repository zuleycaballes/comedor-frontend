import { createProduct } from "../api/ProductAPI";
import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";

const DonarPage: React.FC = () => {
  const handleDonar = async (product: { nombre: string; descripcion: string; inventario: number }) => {
    try {
      await createProduct(product);
      alert('Producto creado con éxito');
    } catch (error) {
      console.error('Error al crear el producto:', error);
      alert('Hubo un error al crear el producto.');
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
        <Formulario onSubmit={handleDonar} buttonText="Donar" />
      </div>
  );
};

export default DonarPage;

