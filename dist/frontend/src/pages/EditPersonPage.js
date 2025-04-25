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
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const PersonAPI_1 = require("../api/PersonAPI");
const FormsPerson_1 = __importDefault(require("../components/FormsPerson"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const EditarPersonaPage = () => {
    const { id } = (0, react_router_dom_1.useParams)(); // Obtener el id de la persona a editar
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [persona, setPersona] = (0, react_1.useState)({
        nombre: "",
        apellido: "",
        edad: 0,
        email: "",
        rol: "donador",
        id_comedor: 1, // Valor inicial del comedor
    });
    (0, react_1.useEffect)(() => {
        const fetchPersona = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield (0, PersonAPI_1.getPersonById)(Number(id)); // Obtener persona por ID
                setPersona(response); // Establecer los datos de la persona
            }
            catch (error) {
                console.error("Error al obtener la persona:", error); // Mostrar error en consola
            }
        });
        if (id) {
            fetchPersona(); // Llamar a la función si hay un ID
        }
    }, [id]);
    const handleEdit = (updatedPerson) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, PersonAPI_1.updatePerson)(Number(id), updatedPerson); // Actualizar persona en la API
            navigate("/personas"); // Redirigir a la lista de personas
        }
        catch (error) {
            console.error("Error al editar la persona:", error); // Mostrar error en consola
            alert("Hubo un error al editar la persona."); // Mostrar alerta al usuario
        }
    });
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default /> 
      <h1 className="title is-3 mb-4 has-text-left">Editar Persona</h1> 
      <FormsPerson_1.default initialData={persona} // Datos iniciales de la persona
     onSubmit={handleEdit} // Manejar el envío del formulario
     submitLabel="Actualizar Persona"/>
    </div>);
};
exports.default = EditarPersonaPage;
