import { useState } from "react";
import FormularioAñadirPersona from "../components/FormularioPerson";
import Navbar from "../components/Navbar";

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
      <h1 className="title is-3 mb-4 has-text-left">Añadir Persona</h1>
        <FormularioAñadirPersona onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddPersonPage;
