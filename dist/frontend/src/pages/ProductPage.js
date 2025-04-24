"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ProductAPI_1 = require("../api/ProductAPI");
const Navbar_1 = __importDefault(require("../components/Navbar"));
const ProductTable_1 = __importDefault(require("../components/ProductTable"));
const ProductPage = () => {
    const [products, setProducts] = (0, react_1.useState)([]);
    // Obtener productos al montar el componente
    (0, react_1.useEffect)(() => {
        (0, ProductAPI_1.getAllProducts)().then((data) => {
            if (data)
                setProducts(data);
        });
    }, []);
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default />
      <h1 className="title is-3 mb-4 has-text-left">Productos</h1>
      <ProductTable_1.default products={products}/>
    </div>);
};
exports.default = ProductPage;
