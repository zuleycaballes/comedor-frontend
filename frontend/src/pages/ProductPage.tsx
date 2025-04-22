import { useEffect, useState } from "react";
import { getAllProducts } from "../api/ProductAPI";
import { Product } from "my-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      if (data) setProducts(data);
    });
  }, []);

  const handleDonarClick = () => {
    window.location.pathname = "/donar"; // Cambiar ruta a la página de donar
  };

  return (
    <div className="container" style={{ fontFamily: "Jost, sans-serif" }}>
      <p className="title is-4 has-text-centered mt-5">Productos</p>

      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>ID</th>
            <th>TIPO</th>
            <th>DESCRIPCIÓN</th>
            <th>INVENTARIO</th>
            <th>EDITAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th className="has-text-link" style={{ color: "#6FA4D3" }}>
                {product.id}
              </th>
              <td>{product.descripcion}</td>
              <td className="is-flex is-align-items-center gap-2">
                <button className="button is-small is-light">−</button>
                <span className="mx-2">{product.inventario}</span>
                <button className="button is-small is-light">+</button>
              </td>
              <td>
                <button
                  className="button is-small"
                  style={{ backgroundColor: "#6FA4D3", color: "white" }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
              <td>
                <button
                  className="button is-small"
                  style={{ backgroundColor: "#f14668", color: "white" }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="has-text-right">
        <button
          className="button"
          onClick={handleDonarClick}
          style={{
            border: "1px solid #6FA4D3",
            color: "#6FA4D3",
            backgroundColor: "transparent",
          }}
        >
          DONAR PRODUCTO
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
