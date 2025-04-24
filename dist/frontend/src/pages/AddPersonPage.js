"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../components/Navbar"));
const FormularioPerson_1 = __importDefault(require("../components/FormularioPerson"));
const PersonAPI_1 = require("../api/PersonAPI");
const react_router_dom_1 = require("react-router-dom");
const AñadirPersonaPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = (persona) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, PersonAPI_1.createPerson)(persona);
            navigate("/personas"); // Redirigir a la lista de personas
        }
        catch (error) {
            console.error("Error al crear la persona:", error);
            alert("Hubo un error al crear la persona.");
        }
    });
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default />
      <h1 className="title is-3 mb-4 has-text-left">Añadir Persona</h1>
      <FormularioPerson_1.default initialData={{ nombre: "", apellido: "", edad: 0, email: "", rol: "donador", id_comedor: 1 }} onSubmit={handleSubmit} submitLabel="Añadir Persona"/>
    </div>);
};
exports.default = AñadirPersonaPage;
