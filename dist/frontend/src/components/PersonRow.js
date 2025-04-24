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
const PersonAPI_1 = require("../api/PersonAPI");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const ConfirmDialog_1 = __importDefault(require("./ConfirmDialog"));
const PersonRow = ({ person, onUpdate }) => {
    const [showConfirm, setShowConfirm] = (0, react_1.useState)(false); // Estado para mostrar el diálogo de confirmación
    // Confirmar eliminación de la persona
    const confirmDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, PersonAPI_1.deletePerson)(person.id); // Llamada a la API para eliminar
        onUpdate(); // Actualizar la tabla
        setShowConfirm(false); // Cerrar el diálogo
    });
    return (<>
      <tr>
        {/* Mostrar datos de la persona */}
        <td className="has-text-weight-semibold">{person.id}</td>
        <td className="has-text-weight-semibold">{person.nombre}</td>
        <td className="has-text-weight-semibold">{person.apellido}</td>
        <td className="has-text-weight-semibold">{person.edad}</td>
        <td className="has-text-weight-semibold">{person.email}</td>
        <td className="has-text-weight-semibold">{person.rol}</td>
        <td>
          <react_router_dom_1.Link to={`/personas/edit/${person.id}`} className="button is-icon">
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faEdit}/>
          </react_router_dom_1.Link>
        </td>
        <td>
          <button className="button is-icon is-trash" onClick={() => setShowConfirm(true)}>
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faTrash}/>
          </button>
        </td>
      </tr>

      <ConfirmDialog_1.default isOpen={showConfirm} title="¿Estás seguro de eliminar esta persona?" message="Esta acción no se puede deshacer." confirmText="Eliminar" cancelText="Cancelar" onConfirm={confirmDelete} onCancel={() => setShowConfirm(false)}/>
    </>);
};
exports.default = PersonRow;
