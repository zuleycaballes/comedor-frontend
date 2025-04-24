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
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const ProductAPI_1 = require("../api/ProductAPI");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const ConfirmDialog_1 = __importDefault(require("./ConfirmDialog"));
const ProductRow = ({ product, onUpdate }) => {
    const [showConfirm, setShowConfirm] = (0, react_1.useState)(false);
    const handleIncrement = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, ProductAPI_1.updateProduct)(product.id, Object.assign(Object.assign({}, product), { inventario: product.inventario + 1 }));
        onUpdate();
    });
    const handleDecrement = () => __awaiter(void 0, void 0, void 0, function* () {
        if (product.inventario > 0) {
            yield (0, ProductAPI_1.updateProduct)(product.id, Object.assign(Object.assign({}, product), { inventario: product.inventario - 1 }));
            onUpdate();
        }
    });
    const confirmDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, ProductAPI_1.deleteProduct)(product.id);
        onUpdate();
        setShowConfirm(false);
    });
    return (<>
      <tr>
        <th className="has-text-weight-semibold">{product.id}</th>
        <td className="has-text-weight-semibold">
        <react_router_dom_1.Link to={`/products/${product.id}`} style={{ color: 'black', textDecoration: 'underline' }}>
          {product.nombre}
        </react_router_dom_1.Link>
      </td>
        <td className="has-text-weight-semibold">{product.descripcion}</td>
        <td className="is-flex is-align-items-center" style={{ border: "none" }}>
          <button className="button is-icon" onClick={handleDecrement}>−</button>
          <span className="mx-2">{product.inventario}</span>
          <button className="button is-icon" onClick={handleIncrement}>+</button>
        </td>
        <td>
          <button className="button is-icon">
          <react_router_dom_1.Link to={`/products/edit/${product.id}`}>
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faEdit}/>
          </react_router_dom_1.Link>
        </button>
        </td>
        <td>
          <button className="button is-icon is-trash" onClick={() => setShowConfirm(true)}>
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faTrash}/>
          </button>
        </td>
      </tr>

      <ConfirmDialog_1.default isOpen={showConfirm} title="¿Estás seguro de eliminar este producto?" message="Esta acción no se puede deshacer." confirmText="Eliminar" cancelText="Cancelar" onConfirm={confirmDelete} onCancel={() => setShowConfirm(false)}/>
    </>);
};
exports.default = ProductRow;
