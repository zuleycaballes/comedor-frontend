import { useEffect, useState } from "react";
import { Product } from "my-types";
import { getAllProducts } from "../api/ProductAPI";
import ProductRow from "./ProductRow";

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    handleUpdate();
  }, []);

  const handleUpdate = async () => {
    const updated = await getAllProducts();
    console.log("Actualizado:", updated); 
    setProducts(updated);
  };
  

  return (
    <div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>
      {/* Título alineado al borde izquierdo de la tabla */}
      <h1 className="title is-3 mb-4 has-text-left">Productos</h1>

      {/* Tabla */}
      <table className="table is-fullwidth is-striped custom-table">
        <thead style={{ borderBottom: "2px solid #a0a0a0" }}>
          <tr>
            <th className="has-text-weight-bold">ID</th>
            <th className="has-text-weight-bold">TIPO</th>
            <th className="has-text-weight-bold">DESCRIPCIÓN</th>
            <th className="has-text-weight-bold">INVENTARIO</th>
            <th className="has-text-weight-bold"></th>
            <th className="has-text-weight-bold"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} onUpdate={handleUpdate} />
          ))}
        </tbody>
      </table>

      {/* Botón alineado con tabla */}
      <div className="has-text-right mt-4">
        <button
          className="button"
          style={{
            border: "1px solid #6FA4D3",
            color: "#6FA4D3",
            backgroundColor: "transparent",
            fontWeight: 600,
          }}
        >
          DONAR PRODUCTO
        </button>
      </div>
    </div>
  );
};

export default ProductTable;