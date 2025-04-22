"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ProductAPI_1 = require("../api/ProductAPI");
const Navbar_1 = __importDefault(require("../components/Navbar"));
const ProductPage = () => {
    const [products, setProducts] = (0, react_1.useState)([]);
    // Obtener productos al montar el componente
    (0, react_1.useEffect)(() => {
        (0, ProductAPI_1.getAllProducts)().then((data) => {
            if (data)
                setProducts(data);
        });
    }, []);
    const handleDonarClick = () => {
        window.location.pathname = "/donar"; // Cambiar ruta a la página de donar
    };
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default /></>);
    <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>ID</th>
            <th>TIPO</th>
            <th>DESCRIPCIÓN</th>
            <th>INVENTARIO</th>
            <th>EDITAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (<tr key={product.id}>
              <th className="has-text-link" style={{ color: "#6FA4D3" }}>
                {product.id}
              </th>
              <td>{product.descripcion}</td>
              <td className="is-flex is-align-items-center gap-2">
                <button className="button is-small is-light">−</button>
                <span className="mx-2">{product.inventario}</span>
                <button className="button is-small is-light">+</button>
              </td>
              <td>
                <button className="button is-small" style={{ backgroundColor: "#6FA4D3", color: "white" }}>
                  <FontAwesomeIcon icon={faEdit}/>
                </button>
              </td>
              <td>
                <button className="button is-small" style={{ backgroundColor: "#f14668", color: "white" }}>
                  <FontAwesomeIcon icon={faTrash}/>
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
        ,
            <div className="has-text-right">
        <button className="button" onClick={handleDonarClick} style={{
                    border: "1px solid #6FA4D3",
                    color: "#6FA4D3",
                    backgroundColor: "transparent",
                }}>
          DONAR PRODUCTO
        </button>
      </div>;
};
div >
;
;
;
exports.default = ProductPage;
