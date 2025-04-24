import Navbar from "../components/Navbar";
import Admin from "../components/Admin";

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
      <h1 className="title is-3 mb-4 has-text-left">Comedor</h1>
      <Admin /> 
    </div>
  );
};

export default ProductDetailPage;