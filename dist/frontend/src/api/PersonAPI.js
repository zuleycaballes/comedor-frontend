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
exports.deletePerson = exports.updatePerson = exports.createPerson = exports.getPersonById = exports.getAllPeople = void 0;
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: "http://localhost:3000", // Asegúrate de que esta URL sea correcta
    headers: { "Content-Type": "application/json" },
});
const getAllPeople = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.get("/api/person");
    return response.data.payload;
});
exports.getAllPeople = getAllPeople;
const getPersonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.get(`/api/person/${id}`);
    return response.data.payload;
});
exports.getPersonById = getPersonById;
const createPerson = (person) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.post("/api/person", person);
    return response.data.payload;
});
exports.createPerson = createPerson;
const updatePerson = (id, person) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.put(`/api/person/${id}`, person);
    return response.data.payload;
});
exports.updatePerson = updatePerson;
const deletePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield api.delete("/api/person", { data: { id } });
});
exports.deletePerson = deletePerson;
