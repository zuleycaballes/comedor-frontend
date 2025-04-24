import { useState } from "react";
import FormularioAñadirPersona from "../components/FormularioAñadirPersona";
import Navbar from "../components/Navbar";
import BotonAñadir from "../components/BotonAñadir";

const AddPersonPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (formData: { nombre: string; apellido: string; email: string; rol: string }) => {
    // Aquí podrías realizar la lógica para manejar el envío del formulario.
    // Por ejemplo, enviar los datos a la API para crear la persona.
    console.log(formData);
    setIsFormSubmitted(true);
  };

  return (
    <div className="container" style={{ fontFamily: "Jost, sans-serif", marginTop: "100px" }}>
      <Navbar />
      <h1 className="title is-3 mb-4">Añadir Persona</h1>
      {isFormSubmitted ? (
        <div className="notification is-success">
          <strong>¡Persona añadida con éxito!</strong> La persona ha sido registrada.
        </div>
      ) : (
        <FormularioAñadirPersona onSubmit={handleFormSubmit} />
      )}
      <div className="has-text-left mt-5 ms-5">
        <BotonAñadir label="Volver a la lista de personas" to="/personas" />
      </div>
    </div>
  );
};

export default AddPersonPage;
