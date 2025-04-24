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
exports.login = exports.deletePerson = exports.updatePerson = exports.createPerson = exports.getPersonById = exports.getAllPeople = void 0;
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" },
});
// Obtiene todas las personas desde el backend
const getAllPeople = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.get("/api/person");
    return response.data.payload;
});
exports.getAllPeople = getAllPeople;
// Obtiene una persona específica por su ID
const getPersonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.get(`/api/person/${id}`);
    return response.data.payload;
});
exports.getPersonById = getPersonById;
// Crea una nueva persona en el backend
const createPerson = (personData // Excluye ciertos campos
) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sending to backend:", personData); // Log para depuración
    const response = yield api.post("/api/person", personData);
    return response.data.payload;
});
exports.createPerson = createPerson;
// Actualiza una persona existente en el backend
const updatePerson = (id, person // Permite enviar solo los campos que se desean actualizar
) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.patch(`/api/person/${id}`, person);
    return response.data.payload;
});
exports.updatePerson = updatePerson;
// Elimina una persona en el backend por su ID
const deletePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield api.delete("/api/person", { data: { id } }); // Envia el ID como parte del cuerpo de la solicitud
});
exports.deletePerson = deletePerson;
// Realiza el login enviando las credenciales al backend
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.post("/api/comedor/login", { username, password }); // Retorna la respuesta completa
});
exports.login = login;
