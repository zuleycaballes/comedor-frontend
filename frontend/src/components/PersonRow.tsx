import { Person } from "my-types";
import { deletePerson } from "../api/PersonAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

interface Props {
  person: Person;
  onUpdate: () => void;
}

const PersonRow = ({ person, onUpdate }: Props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const confirmDelete = async () => {
    await deletePerson(person.id);
    onUpdate();
    setShowConfirm(false);
  };

  return (
    <>
      <tr>
        <td>{person.id}</td>
        <td>{person.nombre}</td>
        <td>{person.apellido}</td>
        <td>{person.email}</td>
        <td>{person.rol}</td>
        <td>
          <Link to={`/persons/edit/${person.id}`} className="button is-icon">
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
        title="¿Estás seguro de eliminar esta persona?"
        message="Esta acción no se puede deshacer."
        confirmText="Eliminar"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default PersonRow;