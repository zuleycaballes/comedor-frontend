"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./src/routes"));
const connection_1 = __importDefault(require("./src/connection/connection"));
const path_1 = __importDefault(require("path"));
const morgan = require('morgan');
const app = (0, express_1.default)();
const port = 3000;
// Configurar archivos estáticos
app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Usar las rutas de la API
app.use('/api', routes_1.default); // Prefijo para las rutas de la API
(0, connection_1.default)();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
