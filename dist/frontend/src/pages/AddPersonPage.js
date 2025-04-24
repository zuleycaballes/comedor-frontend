"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FormularioPerson_1 = __importDefault(require("../components/FormularioPerson"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
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
      <h1 className="title is-3 mb-4 has-text-left">Añadir Persona</h1>
        <FormularioPerson_1.default onSubmit={handleFormSubmit}/>
    </div>);
};
exports.default = AddPersonPage;
