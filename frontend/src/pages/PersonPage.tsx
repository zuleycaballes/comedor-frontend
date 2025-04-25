import AddButton from "../components/AddButton";
import Navbar from "../components/Navbar";
import PersonTable from "../components/PersonTable";

const PersonPage = () => {

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
      <PersonTable />
      <div className="has-text-right mt-5 mr-5">
      <AddButton label="Añadir Persona" to="/personas/add"/>
      </div>
    </div>
  );
};

export default PersonPage;
