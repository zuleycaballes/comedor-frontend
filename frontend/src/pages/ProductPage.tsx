import Navbar from "../components/Navbar";
import ProductTable from "../components/ProductTable";

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
      <ProductTable />
    </div>
  );
};

export default ProductPage;