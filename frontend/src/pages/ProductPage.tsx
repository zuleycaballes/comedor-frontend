import { useEffect, useState } from "react";
import { Product } from "my-types";
import { getAllProducts, createProduct } from "../api/ProductAPI";
import Navbar from "../components/Navbar";
import ProductTable from "../components/ProductTable";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Obtener productos al montar el componente
  useEffect(() => {
    getAllProducts().then((data) => {
      if (data) setProducts(data);
    });
  }, []);

  return (
    <div
      className="container"
      style={{
      fontFamily: "Jost, sans-serif",
      marginTop: "100px",
      }}
    >
      <Navbar />

      <ProductTable products={products} />
    </div>
  );
};

export default ProductPage;