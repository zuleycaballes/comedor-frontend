import Navbar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";
import BotonAñadir from "../components/BotonAñadir";

const ProductDetailPage = () => {

  return (
    <div
      className="container"
      style={{
        fontFamily: "Jost, sans-serif",
        marginTop: "100px",
      }}
    >
      <Navbar />
      <h1 className="title is-3 mb-4 has-text-left">Producto:</h1>
      <ProductDetail />
      <div className="has-text-right mt-5 mr-5">
      <BotonAñadir label="Regresar" to="/products" />
      </div>
    </div>
  );
};


export default ProductDetailPage;
