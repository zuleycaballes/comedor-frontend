import { Person } from "my-types";
import { deletePerson } from "../api/PersonAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

interface Props {
  person: Person; // Persona a mostrar
  onUpdate: () => void; // Función para actualizar la tabla
}

const PersonRow = ({ person, onUpdate }: Props) => {
  const [showConfirm, setShowConfirm] = useState(false); // Estado para mostrar el diálogo de confirmación

  // Confirmar eliminación de la persona
  const confirmDelete = async () => {
    await deletePerson(person.id); // Llamada a la API para eliminar
    onUpdate(); // Actualizar la tabla
    setShowConfirm(false); // Cerrar el diálogo
  };

  return (
    <>
      <tr>
        {/* Mostrar datos de la persona */}
        <td className="has-text-weight-semibold">{person.id}</td>
        <td className="has-text-weight-semibold">{person.nombre}</td>
        <td className="has-text-weight-semibold">{person.apellido}</td>
        <td className="has-text-weight-semibold">{person.edad}</td>
        <td className="has-text-weight-semibold">{person.email}</td>
        <td className="has-text-weight-semibold">{person.rol}</td>
        <td>
          <Link to={`/personas/edit/${person.id}`} className="button is-icon">
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