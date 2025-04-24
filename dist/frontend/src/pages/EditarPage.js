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
const ProductAPI_1 = require("../api/ProductAPI");
const Navbar_1 = __importDefault(require("../components/Navbar"));
const Formulario_1 = __importDefault(require("../components/Formulario"));
const EditarPage = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [product, setProduct] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        (0, ProductAPI_1.getAllProducts)().then((products) => {
            const found = products.find((p) => p.id === Number(id));
            if (found)
                setProduct(found);
        });
    }, [id]);
    const handleEditProduct = (updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
        if (product) {
            const updated = Object.assign(Object.assign({}, product), updatedProduct);
            yield (0, ProductAPI_1.updateProduct)(updated.id, updated);
            navigate("/products");
        }
    });
    if (!product)
        return <div>Cargando...</div>;
    return (<div className="container" style={{
            fontFamily: "Jost, sans-serif",
            marginTop: "100px",
        }}>
      <Navbar_1.default />
      <h1 className="title is-3 mb-4 has-text-left">Editar Producto</h1>
        <Formulario_1.default product={product} onSubmit={handleEditProduct} buttonText="Guardar"/>
      </div>);
};
exports.default = EditarPage;
