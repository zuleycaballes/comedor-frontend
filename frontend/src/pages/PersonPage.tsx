import { useEffect, useState } from "react";
import { Person } from "my-types";
import { getAllPeople } from "../api/PersonAPI";
import BotonAñadir from "../components/BotonAñadir";
import Navbar from "../components/Navbar";
import PersonTable from "../components/PersonTable";

const PersonPage = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    getAllPeople().then((data) => {
      if (data) setPeople(data);
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
      <h1 className="title is-3 mb-4 has-text-left">Personas</h1>
      <PersonTable people={people} />
      <div className="has-text-right mt-5 mr-5">
      <BotonAñadir label="Añadir Persona" to="/personas/add"/>
      </div>
    </div>
  );
};

export default PersonPage;
