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
exports.getProductById = exports.deleteProduct = exports.modifyProduct = exports.createProduct = exports.getAllProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" },
});
// Función para obtener todos los productos desde el backend
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield api.get("/api/product"); // Realiza una solicitud GET a la API
    return res.data.payload; // Retorna los datos obtenidos
});
exports.getAllProducts = getAllProducts;
// Función para crear un nuevo producto en el backend
const createProduct = (productData // Excluye ciertos campos del tipo Product
) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sending to backend:", productData); // Log para depuración
    const res = yield api.post("/api/product", productData); // Realiza una solicitud POST con los datos del producto
    return res.data.payload; // Retorna el producto creado
});
exports.createProduct = createProduct;
// Función para actualizar un producto existente en el backend
const modifyProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield api.patch(`/api/product/${id}`, data); // Realiza una solicitud PATCH con los datos a actualizar
    return res.data.payload; // Retorna el producto actualizado
});
exports.modifyProduct = modifyProduct;
// Función para eliminar un producto del backend
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield api.delete(`/api/product/${id}`); // Realiza una solicitud DELETE
        return res.data.payload; // Retorna el resultado de la eliminación
    }
    catch (error) {
        console.error("Error deleting product:", error);
    }
});
exports.deleteProduct = deleteProduct;
// Función para obtener un producto específico por su ID
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield api.get(`/api/product/${id}`); // Realiza una solicitud GET para un producto específico
    return res.data.payload; // Retorna el producto obtenido
});
exports.getProductById = getProductById;
