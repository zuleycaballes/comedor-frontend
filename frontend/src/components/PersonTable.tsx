import { useEffect, useState } from "react";
import { getAllPeople } from "../api/PersonAPI";
import PersonRow from "./PersonRow";
import { Person } from "my-types";

const PersonTable = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    handleUpdate();
  }, []);

  const handleUpdate = async () => {
    const updated = await getAllPeople();
    setPeople(updated);
  };

  return (
    <div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>

      <table className="table is-fullwidth is-striped custom-table">
        <thead>
          <tr>
            <th className="has-text-weight-bold">ID</th>
            <th className="has-text-weight-bold">NOMBRE</th>
            <th className="has-text-weight-bold">APELLIDO</th>
            <th className="has-text-weight-bold">EDAD</th>
            <th className="has-text-weight-bold">EMAIL</th>
            <th className="has-text-weight-bold">ROL</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <PersonRow key={person.id} person={person} onUpdate={handleUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonTable;
