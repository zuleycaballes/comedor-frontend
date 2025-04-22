import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Product } from "my-types";
import { updateProduct, deleteProduct } from "../api/ProductAPI";

interface Props {
  product: Product;
  onUpdate: () => void;
}

const ProductRow = ({ product, onUpdate }: Props) => {
  const handleIncrement = async () => {
    await updateProduct(product.id, { ...product, inventario: product.inventario + 1 });
    onUpdate();
  };

  const handleDecrement = async () => {
    if (product.inventario > 0) {
      await updateProduct(product.id, { ...product, inventario: product.inventario - 1 });
      onUpdate();
    }
  };

  const handleDelete = async () => {
    await deleteProduct(product.id);
    onUpdate();
  };

  return (
    <tr>
      <th className="has-text-weight-semibold">{product.id}</th>
      <td className="has-text-weight-semibold">{product.tipo}</td>
      <td className="has-text-weight-semibold">{product.descripcion}</td>
      <td className="is-flex is-align-items-center" style={{ border: "none" }}>
        <button className="button is-icon" onClick={handleDecrement}>−</button>
        <span className="mx-2">{product.inventario}</span>
        <button className="button is-icon" onClick={handleIncrement}>+</button>
      </td>
      <td>
        <button className="button is-icon">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </td>
      <td>
        <button className="button is-icon is-trash" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
