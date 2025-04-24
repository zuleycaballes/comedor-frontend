import Navbar from "../components/Navbar";
import FormularioPerson from "../components/FormularioPerson";
import { createPerson } from "../api/PersonAPI";
import { useNavigate } from "react-router-dom";

const AñadirPersonaPage = () => {
  const navigate = useNavigate(); // Navegación para redirigir

  // Manejar el envío del formulario
  const handleSubmit = async (persona: {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    rol: "donador" | "consumidor";
    id_comedor: number;
  }) => {
    try {
      await createPerson(persona); // Crear persona en la API
      navigate("/personas"); // Redirigir a la lista de personas
    } catch (error) {
      console.error("Error al crear la persona:", error); // Mostrar error en consola
      alert("Hubo un error al crear la persona."); // Mostrar alerta al usuario
    }
  };

  return (
    <div
      className="container"
      style={{
        fontFamily: "Jost, sans-serif",
        marginTop: "100px",
      }}
    >
      <Navbar /> 
      <h1 className="title is-3 mb-4 has-text-left">Añadir Persona</h1>
      <FormularioPerson 
        initialData={{ nombre: "", apellido: "", edad: 0, email: "", rol: "donador", id_comedor: 1 }} // Datos iniciales
        onSubmit={handleSubmit} // Manejar el envío
        submitLabel="Añadir Persona"
      />
    </div>
  );
};

export default AñadirPersonaPage;