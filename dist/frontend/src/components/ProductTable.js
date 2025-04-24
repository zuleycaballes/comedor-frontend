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
const ProductAPI_1 = require("../api/ProductAPI");
const ProductRow_1 = __importDefault(require("./ProductRow"));
const ProductTable = () => {
    const [products, setProducts] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        handleUpdate();
    }, []);
    const handleUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        const updated = yield (0, ProductAPI_1.getAllProducts)();
        console.log("Actualizado:", updated);
        setProducts(updated);
    });
    return (<div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>
      {/* Título alineado al borde izquierdo de la tabla */}
      <h1 className="title is-3 mb-4 has-text-left">Productos</h1>

      {/* Tabla */}
      <table className="table is-fullwidth is-striped custom-table">
        <thead style={{ borderBottom: "2px solid #a0a0a0" }}>
          <tr>
            <th className="has-text-weight-bold">ID</th>
            <th className="has-text-weight-bold">NOMBRE</th>
            <th className="has-text-weight-bold">DESCRIPCIÓN</th>
            <th className="has-text-weight-bold">INVENTARIO</th>
            <th className="has-text-weight-bold"></th>
            <th className="has-text-weight-bold"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (<ProductRow_1.default key={product.id} product={product} onUpdate={handleUpdate}/>))}
        </tbody>
      </table>  
    </div>);
};
exports.default = ProductTable;
