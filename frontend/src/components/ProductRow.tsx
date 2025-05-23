import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Product } from "my-types";
import { modifyProduct, deleteProduct } from "../api/ProductAPI";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

interface Props {
  product: Product;
  onUpdate: () => void;
}

const ProductRow = ({ product, onUpdate }: Props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  // Incrementar inventario del producto
  const handleIncrement = async () => {
    await modifyProduct(product.id, { ...product, inventario: product.inventario + 1 });
    onUpdate();
  };

  // Decrementar inventario del producto
  const handleDecrement = async () => {
    if (product.inventario > 0) {
      await modifyProduct(product.id, { ...product, inventario: product.inventario - 1 });
      onUpdate();
    }
  };

  // Confirmar y eliminar producto
  const confirmDelete = async () => {
    await deleteProduct(product.id);
    onUpdate();
    setShowConfirm(false);
  };

  return (
    <>
      <tr>
        <th className="has-text-weight-semibold">{product.id}</th>

        <td className="has-text-weight-semibold">
          <Link to={`/products/${product.id}`} style={{ color: 'black', textDecoration: 'underline' }}>
            {product.nombre}
          </Link>
        </td>

        <td
          className="has-text-weight-semibold"
          style={{
            maxWidth: "200px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          {product.descripcion}
        </td>

        {/* Controles para inventario */}
        <td className="is-flex is-align-items-center" style={{ border: "none" }}>
          <button className="button is-icon" onClick={handleDecrement}>−</button>
          <span className="mx-2">{product.inventario}</span>
          <button className="button is-icon" onClick={handleIncrement}>+</button>
        </td>

        <td>
          <Link to={`/products/edit/${product.id}`} className ="button is-icon">
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </td>

        <td>
          <button className="button is-icon is-trash" onClick={() => setShowConfirm(true)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>

      <ConfirmDialog
        isOpen={showConfirm}
        title="¿Estás seguro de eliminar este producto?"
        message="Esta acción no se puede deshacer."
        confirmText="Eliminar"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default ProductRow;