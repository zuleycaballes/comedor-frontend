import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPersonById, updatePerson } from "../api/PersonAPI";
import FormsPersona from "../components/FormsPerson";
import Navbar from "../components/Navbar";

const EditarPersonaPage = () => {
  const { id } = useParams(); // Obtener el id de la persona a editar
  const navigate = useNavigate(); 
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
    email: "",
    rol: "donador" as "donador" | "consumidor",
    id_comedor: 1, // Valor inicial del comedor
  });

  useEffect(() => {
    const fetchPersona = async () => {
      try {
        const response = await getPersonById(Number(id)); // Obtener persona por ID
        setPersona(response); // Establecer los datos de la persona
      } catch (error) {
        console.error("Error al obtener la persona:", error); // Mostrar error en consola
      }
    };

    if (id) {
      fetchPersona(); // Llamar a la función si hay un ID
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
      await updatePerson(Number(id), updatedPerson); // Actualizar persona en la API
      navigate("/personas"); // Redirigir a la lista de personas
    } catch (error) {
      console.error("Error al editar la persona:", error); // Mostrar error en consola
      alert("Hubo un error al editar la persona."); // Mostrar alerta al usuario
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
      <FormsPersona
        initialData={persona} // Datos iniciales de la persona
        onSubmit={handleEdit} // Manejar el envío del formulario
        submitLabel="Actualizar Persona" 
      />
    </div>
  );
};

export default EditarPersonaPage;
