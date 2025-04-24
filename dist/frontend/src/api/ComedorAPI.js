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
exports.getComedorById = exports.login = void 0;
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" },
});
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.post("/api/comedor/login", { username, password });
});
exports.login = login;
const getComedorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(`http://localhost:3000/api/comedor/${id}`);
    return res.data.payload;
});
exports.getComedorById = getComedorById;
