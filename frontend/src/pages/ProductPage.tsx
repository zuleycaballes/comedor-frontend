import Navbar from "../components/Navbar";
import ProductTable from "../components/ProductTable";
import BotonAñadir from "../components/BotonAñadir";

const ProductPage = () => {
  return (
    <div
      className="container"
      style={{
        fontFamily: "Jost, sans-serif",
        marginTop: "100px",
      }}
    >
      <Navbar />
      <h1 className="title is-3 mb-4 has-text-left">Productos</h1>
      <ProductTable />
      <div className="has-text-right mt-5 ml-5">
      <BotonAñadir label="Donar Producto" to="/donar"/>
      </div>
    </div>
  );
};

export default ProductPage;