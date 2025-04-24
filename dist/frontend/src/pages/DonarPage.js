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
const ProductAPI_1 = require("../api/ProductAPI");
const react_router_dom_1 = require("react-router-dom");
const Formulario_1 = __importDefault(require("../components/Formulario"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const DonarPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleDonar = (product) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, ProductAPI_1.createProduct)(product);
            navigate("/product");
        }
        catch (error) {
            console.error('Error al crear el producto:', error);
            alert('Hubo un error al crear el producto.');
        }
    });
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
    <Navbar_1.default />
    <h1 className="title is-3 mb-4 has-text-left">Donar Producto</h1>
        <Formulario_1.default onSubmit={handleDonar} buttonText="Donar"/>
      </div>);
};
exports.default = DonarPage;
