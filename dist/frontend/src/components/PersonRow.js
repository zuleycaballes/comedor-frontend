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
Object.defineProperty(exports, "__esModule", { value: true });
const PersonAPI_1 = require("../api/PersonAPI");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_router_dom_1 = require("react-router-dom");
const PersonRow = ({ person, onUpdate }) => {
    const handleDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, PersonAPI_1.deletePerson)(person.id);
        onUpdate();
    });
    return (<tr>
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
        <button className="button is-icon is-trash" onClick={handleDelete}>
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faTrash}/>
        </button>
      </td>
    </tr>);
};
exports.default = PersonRow;
