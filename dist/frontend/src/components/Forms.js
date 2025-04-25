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
const a_adir_img_png_1 = __importDefault(require("../assets/a\u00F1adir_img.png"));
require("./Forms.css");
const ImageUpload_1 = __importDefault(require("./ImageUpload"));
const Formulario = ({ product, buttonText, onSubmit }) => {
    // Estados para manejar los valores del formulario
    const [nombre, setNombre] = (0, react_1.useState)('');
    const [descripcion, setDescripcion] = (0, react_1.useState)('');
    const [cantidad, setCantidad] = (0, react_1.useState)(0);
    const [imagenUrl, setImagenUrl] = (0, react_1.useState)(null);
    // Inicializar los valores si se recibe un producto
    (0, react_1.useEffect)(() => {
        if (product) {
            setNombre(product.nombre);
            setDescripcion(product.descripcion);
            setCantidad(product.inventario);
            setImagenUrl(product.imagen ? `http://localhost:3000${product.imagen}` : '');
        }
    }, [product]);
    // Redirige a la página de productos
    const handleProductosClick = () => {
        window.location.pathname = '/products';
    };
    // Maneja el envío del formulario
    // Maneja el envío del formulario
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const comedorId = Number(localStorage.getItem("comedorId"));
        if (!comedorId) {
            alert("Error: no hay sesión activa");
            return;
        }
        const productoData = {
            nombre,
            descripcion,
            inventario: cantidad,
            imagen: imagenUrl ? imagenUrl.replace("http://localhost:3000", "") : undefined,
        };
        try {
            yield onSubmit(product ? productoData : Object.assign(Object.assign({}, productoData), { id_comedor: comedorId }));
            alert("Operación realizada con éxito");
            // Si estás en modo creación, puedes resetear:
            if (!product) {
                setNombre('');
                setDescripcion('');
                setCantidad(0);
                setImagenUrl('');
            }
        }
        catch (error) {
            alert("Hubo un error al guardar el producto.");
        }
    });
    return (<div className="formulario-container">
      <div className="formulario-content">
        <div className="formulario-image">
          <img src={imagenUrl || a_adir_img_png_1.default} alt="Vista previa" style={{ width: "350px", height: "300px", objectFit: "contain", borderRadius: "1rem" }}/>
          <ImageUpload_1.default onUpload={(url) => setImagenUrl(`http://localhost:3000${url}`)}/>
        </div>

        <form onSubmit={handleSubmit} className="formulario-form">
          <div className="form-field">
            <label className="form-label">Nombre</label>
            <div className="form-control">
              <input className="input" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa el nombre del producto" required/>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Descripción</label>
            <div className="form-control">
              <input className="input" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del producto"/>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Cantidad</label>
            <div className="form-control">
              <input className="input" type="number" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} required/>
            </div>
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={handleProductosClick}>
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = Formulario;
