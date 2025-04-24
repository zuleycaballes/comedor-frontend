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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ComedorAPI_1 = require("../api/ComedorAPI");
require("./Admin.css");
const AdminPage = () => {
    const [comedor, setComedor] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const comedorId = localStorage.getItem("comedorId");
        console.log("comedorId from localStorage:", comedorId);
        if (!comedorId) {
            alert("Error: no hay sesión activa");
            return;
        }
        const id = Number(comedorId);
        console.log("Parsed ID:", id);
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, ComedorAPI_1.getComedorById)(id);
            console.log("Comedor data:", data);
            setComedor(data);
        });
        fetchData();
    }, []);
    if (!comedor)
        return <div className="loading">Cargando información del comedor...</div>;
    return (<div className="admin-container">
      <h1 className="admin-title">{comedor.nombre}</h1>
      <div className="admin-details">
        <p className="admin-category"><strong>Dirección:</strong> {comedor.direccion || "No especificada"}</p>
        <p className="admin-category"><strong>Teléfono:</strong> {comedor.telefono}</p>
        <p className="admin-category"><strong>Fecha de creación:</strong> {new Date(comedor.createdAt).toLocaleDateString()}</p>
        <p className="admin-category"><strong>Última actualización:</strong> {new Date(comedor.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>);
};
exports.default = AdminPage;
