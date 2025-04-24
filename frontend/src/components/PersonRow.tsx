import { Person } from "my-types";
import { deletePerson } from "../api/PersonAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {
  person: Person;
  onUpdate: () => void;
}

const PersonRow = ({ person, onUpdate }: Props) => {
  const handleDelete = async () => {
    await deletePerson(person.id);
    onUpdate();
  };

  return (
    <tr>
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
        <button className="button is-icon is-trash" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default PersonRow;
