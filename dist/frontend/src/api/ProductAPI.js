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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getAllProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" },
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield api.get("/api/product");
    return res.data.payload;
});
exports.getAllProducts = getAllProducts;
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sending to backend:", productData);
    const res = yield api.post("/api/product", productData);
    return res.data.payload;
});
exports.createProduct = createProduct;
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield api.post("/api/product", product);
    return res.data.payload;
});
exports.createProduct = createProduct;
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield api.patch(`/api/product/${id}`, data);
    return res.data.payload;
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield api.delete(`/api/product/${id}`);
        return res.data.payload;
    }
    catch (error) {
        console.error("Error deleting product:", error);
    }
});
exports.deleteProduct = deleteProduct;
