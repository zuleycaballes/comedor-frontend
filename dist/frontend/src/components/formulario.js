"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const react_1 = __importStar(require("react"));
const ProductAPI_1 = require("../api/ProductAPI");
const a_adir_img_png_1 = __importDefault(require("../assets/a\u00F1adir_img.png"));
const Formulario = () => {
    const [nombre, setNombre] = (0, react_1.useState)('');
    const [descripcion, setDescripcion] = (0, react_1.useState)('');
    const [cantidad, setCantidad] = (0, react_1.useState)(0);
    const handleProductosClick = () => {
        window.location.pathname = '/';
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield (0, ProductAPI_1.createProduct)({ nombre, descripcion, inventario: cantidad });
            alert('Donación registrada con éxito');
            setNombre('');
            setDescripcion('');
            setCantidad(0);
        }
        catch (error) {
            console.error('Error al registrar la donación:', error);
            alert('Hubo un error al registrar la donación.');
        }
    });
    return (<div className="container" style={{
            fontFamily: 'Jost, sans-serif',
            marginTop: '50px',
            padding: '0 2rem',
        }}>
      <h1 className="title is-3 mb-6" style={{ fontWeight: '800', fontSize: '2rem', textAlign: 'left' }}>
        Donación
      </h1>

      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '60px',
            flexWrap: 'wrap',
        }}>
        <div style={{ width: '300px', height: '300px' }}>
          <img src={a_adir_img_png_1.default} alt="Añadir imagen" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '16px',
        }}/>
        </div>

        <div style={{ maxWidth: '350px', textAlign: 'left' }}>
          <form onSubmit={handleSubmit}>

            <div className="field" style={{ marginBottom: '40px' }}>
              <label className="label" style={{ fontSize: '1.4rem' }}>Nombre</label> 
              <div className="control">
                <input className="input" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa el nombre del producto" required style={{ width: '500px', height: '40px' }}/>
              </div>
            </div>

            <div className="field" style={{ marginBottom: '40px' }}>
              <label className="label" style={{ fontSize: '1.4rem' }}>Descripción</label> 
              <div className="control">
                <input className="input" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del producto" style={{ width: '500px', height: '40px' }}/>
              </div>
            </div>

            <div className="field" style={{ marginBottom: '40px' }}>
              <label className="label" style={{ fontSize: '1.4rem' }}>Cantidad</label> 
              <div className="control">
                <input className="input" type="number" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} required style={{ width: '500px', height: '40px' }}/>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', paddingRight: '200px' }}>
        <div className="control" style={{ marginRight: '10px' }}>
          <button type="button" className="button" onClick={handleProductosClick} style={{
            border: '1px solid #6FA4D3',
            backgroundColor: '#efefef',
            color: '#6FA4D3',
            width: '120px',
            height: '40px',
            fontSize: '1.15rem',
        }}>
            Cancelar
          </button>
        </div>
        <div className="control">
          <button type="submit" className="button" style={{
            border: '1px solid #6FA4D3',
            backgroundColor: 'transparent',
            color: '#6FA4D3',
            width: '120px',
            height: '40px',
            fontSize: '1.15rem',
        }}>
            Donar
          </button>
        </div>
      </div>
    </div>);
};
exports.default = Formulario;
