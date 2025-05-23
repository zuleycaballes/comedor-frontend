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
const PersonAPI_1 = require("../api/PersonAPI");
const PersonRow_1 = __importDefault(require("./PersonRow"));
const FilterBar_1 = __importDefault(require("./FilterBar"));
const PersonTable = () => {
    // Estados para manejar personas, filtros y ordenamiento
    const [people, setPeople] = (0, react_1.useState)([]);
    const [filteredPeople, setFilteredPeople] = (0, react_1.useState)([]);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const [sortBy, setSortBy] = (0, react_1.useState)("");
    // Obtener personas al montar el componente
    (0, react_1.useEffect)(() => {
        handleUpdate();
    }, []);
    const handleUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        // Obtener el ID del comedor desde localStorage
        const comedorId = Number(localStorage.getItem("comedorId"));
        // Obtener todas las personas y filtrar por comedor
        const updated = yield (0, PersonAPI_1.getAllPeople)();
        const filtered = updated.filter((p) => p.id_comedor === comedorId);
        setPeople(filtered);
        setFilteredPeople(filtered);
    });
    // Aplicar filtros y ordenamiento cuando cambian los estados
    (0, react_1.useEffect)(() => {
        let result = [...people];
        // Filtrar por término de búsqueda
        if (searchTerm.trim()) {
            result = result.filter((p) => p.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        // Ordenar por nombre ascendente o descendente
        if (sortBy === "nombre-asc") {
            result.sort((a, b) => a.nombre.localeCompare(b.nombre));
        }
        else if (sortBy === "nombre-desc") {
            result.sort((a, b) => b.nombre.localeCompare(a.nombre));
        }
        setFilteredPeople(result);
    }, [searchTerm, sortBy, people]);
    return (<div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>
      <FilterBar_1.default searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortBy={sortBy} setSortBy={(key) => setSortBy(key)} showReset={!!(searchTerm || sortBy)} onReset={() => {
            setSearchTerm("");
            setSortBy("");
        }} options={[
            { label: "Ordenar A-Z", value: "nombre-asc" },
            { label: "Ordenar Z-A", value: "nombre-desc" },
        ]}/>

      {/* Tabla de personas */}
      <table className="table is-fullwidth is-striped custom-table">
        <thead>
          <tr>
            <th className="has-text-weight-bold">ID</th>
            <th className="has-text-weight-bold">NOMBRE</th>
            <th className="has-text-weight-bold">APELLIDO</th>
            <th className="has-text-weight-bold">EDAD</th>
            <th className="has-text-weight-bold">EMAIL</th>
            <th className="has-text-weight-bold">ROL</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Filtrar y mostrar filas de personas */}
          {filteredPeople.map((person) => (<PersonRow_1.default key={person.id} person={person} onUpdate={handleUpdate}/>))}
        </tbody>
      </table>
    </div>);
};
exports.default = PersonTable;
