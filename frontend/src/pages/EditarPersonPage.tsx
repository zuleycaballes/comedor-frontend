import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPersonById, updatePerson } from "../api/PersonAPI"; // Usar getPersonById
import FormularioPersona from "../components/FormularioPerson";
import Navbar from "../components/Navbar";

const EditarPersonaPage = () => {
  const { id } = useParams(); // Obtener el id de la persona a editar desde la URL
  const navigate = useNavigate();
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
    email: "",
    rol: "donador" as "donador" | "consumidor",
    id_comedor: 1, // O el valor adecuado
  });

  useEffect(() => {
    const fetchPersona = async () => {
      try {
        const response = await getPersonById(Number(id)); // Usar getPersonById
        setPersona(response); 
      } catch (error) {
        console.error("Error al obtener la persona:", error);
      }
    };

    if (id) {
      fetchPersona();
    }
  }, [id]);

  const handleEdit = async (updatedPerson: {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    rol: "donador" | "consumidor";
    id_comedor: number;
  }) => {
    try {
      await updatePerson(Number(id), updatedPerson); // Actualizar persona
      navigate("/personas"); // Redirigir a la lista de personas
    } catch (error) {
      console.error("Error al editar la persona:", error);
      alert("Hubo un error al editar la persona.");
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
      <h1 className="title is-3 mb-4 has-text-left">Editar Persona</h1>
      <FormularioPersona
        initialData={persona}
        onSubmit={handleEdit}
        submitLabel="Actualizar Persona"
      />
    </div>
  );
};

export default EditarPersonaPage;

