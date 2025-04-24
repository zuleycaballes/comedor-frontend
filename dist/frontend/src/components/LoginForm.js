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
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const LoginForm = () => {
    const [usuario, setUsuario] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const res = yield axios_1.default.get(`http://localhost:3000/api/comedor`);
            const comedores = res.data.payload;
            const existe = comedores.some((comedor) => comedor.nombre === usuario);
            if (existe && password === "123") {
                navigate("/dashboard");
            }
            else {
                alert("Usuario o contraseña incorrectos");
            }
        }
        catch (error) {
            console.error("Error al verificar el usuario:", error);
            alert("Error al intentar iniciar sesión");
        }
    });
    return (<form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
      <h1 style={{ fontWeight: 600, fontSize: "1.5rem", textAlign: "center", marginBottom: "0.5rem" }}>
        El Comedor
      </h1>
      <p style={{ textAlign: "center", color: "#aaa", marginBottom: "2rem" }}>
        Ingresa tus datos
      </p>

      <div className="field">
        <label className="label">Usuario</label>
        <div className="control">
          <input className="input" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
        </div>
      </div>

      <div className="field">
        <label className="label">Contraseña</label>
        <div className="control">
          <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
      </div>

      <div className="login-button-container">
        <button type="submit" className="login-button">
            Iniciar Sesión
        </button>
      </div>
    </form>);
};
exports.default = LoginForm;
