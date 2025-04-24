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
        <button className="button is-icon is-trash" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default PersonRow;
