"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FormularioA_adirPersona_1 = __importDefault(require("../components/FormularioA\u00F1adirPersona"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const BotonA_adir_1 = __importDefault(require("../components/BotonA\u00F1adir"));
const AddPersonPage = () => {
    const [isFormSubmitted, setIsFormSubmitted] = (0, react_1.useState)(false);
    const handleFormSubmit = (formData) => {
        // Aquí podrías realizar la lógica para manejar el envío del formulario.
        // Por ejemplo, enviar los datos a la API para crear la persona.
        console.log(formData);
        setIsFormSubmitted(true);
    };
    return (<div className="container" style={{ fontFamily: "Jost, sans-serif", marginTop: "100px" }}>
      <Navbar_1.default />
      <h1 className="title is-3 mb-4">Añadir Persona</h1>
      {isFormSubmitted ? (<div className="notification is-success">
          <strong>¡Persona añadida con éxito!</strong> La persona ha sido registrada.
        </div>) : (<FormularioA_adirPersona_1.default onSubmit={handleFormSubmit}/>)}
      <div className="has-text-left mt-5 ms-5">
        <BotonA_adir_1.default label="Volver a la lista de personas" to="/personas"/>
      </div>
    </div>);
};
exports.default = AddPersonPage;
