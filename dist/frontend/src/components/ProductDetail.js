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
require("./ProductDetail.css");
const a_adir_img_png_1 = __importDefault(require("../assets/a\u00F1adir_img.png"));
const ProductDetailPage = () => {
    const { id } = (0, react_router_dom_1.useParams)(); // Obtener el ID del producto 
    const [product, setProduct] = (0, react_1.useState)(null); // Almacenar el producto
    const [loading, setLoading] = (0, react_1.useState)(true); // Manejar la carga
    const [error, setError] = (0, react_1.useState)(null); // Manejar errores
    (0, react_1.useEffect)(() => {
        const fetchProduct = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            setError(null);
            try {
                if (id) {
                    const fetchedProduct = yield (0, ProductAPI_1.getProductById)(Number(id)); // Llamada a la API para obtener el producto
                    setProduct(fetchedProduct);
                }
            }
            catch (err) {
                setError("No se pudo cargar el producto. Intenta nuevamente."); // Manejo de errores
            }
            finally {
                setLoading(false);
            }
        });
        fetchProduct();
    }, [id]); // Ejecutar efecto cuando cambie el ID
    if (loading)
        return <div>Cargando...</div>;
    if (error)
        return <div>{error}</div>;
    if (!product)
        return <div>Producto no encontrado.</div>;
    return (<div className="product-detail-container">
      <h1 className="product-title">{product.nombre}</h1> 

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <img src={product.imagen ? `${product.imagen}` : a_adir_img_png_1.default} // Mostrar imagen del producto o una por defecto
     alt={`Imagen de ${product.nombre}`} style={{
            width: "250px",
            height: "250px",
            objectFit: "contain",
            borderRadius: "1rem"
        }}/>
      </div>

      <div className="product-details">
        {/* Mostrar detalles del producto */}
        <p className="product-details-category"><strong>ID:</strong> {product.id}</p>
        <p className="product-details-category"><strong>Descripción:</strong> {product.descripcion}</p>
        <p className="product-details-category"><strong>Inventario:</strong> {product.inventario}</p>
        <p className="product-details-category"><strong>Comedor ID:</strong> {product.id_comedor}</p>
      </div>
    </div>);
};
exports.default = ProductDetailPage;
