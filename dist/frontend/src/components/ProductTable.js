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
const ProductAPI_1 = require("../api/ProductAPI");
const ProductRow_1 = __importDefault(require("./ProductRow"));
const FilterBar_1 = __importDefault(require("./FilterBar"));
const ProductTable = () => {
    // Estados para manejar productos, filtros y ordenamiento
    const [products, setProducts] = (0, react_1.useState)([]);
    const [filteredProducts, setFilteredProducts] = (0, react_1.useState)([]);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const [sortBy, setSortBy] = (0, react_1.useState)("");
    // Cargar productos al montar el componente
    (0, react_1.useEffect)(() => {
        handleUpdate();
    }, []);
    // Obtener productos desde la API y filtrarlos por comedor
    const handleUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        const comedorId = Number(localStorage.getItem("comedorId"));
        const updated = yield (0, ProductAPI_1.getAllProducts)();
        const filtered = updated.filter((p) => p.id_comedor === comedorId);
        setProducts(filtered);
        setFilteredProducts(filtered);
    });
    // Reiniciar filtros y ordenamiento
    const handleResetFilters = () => {
        setSearchTerm("");
        setSortBy("");
        setFilteredProducts(products);
    };
    // Aplicar filtros y ordenamiento cuando cambian los estados relacionados
    (0, react_1.useEffect)(() => {
        let result = [...products];
        // Filtrar por término de búsqueda
        if (searchTerm.trim() !== "") {
            result = result.filter((p) => p.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        // Ordenar según la opción seleccionada
        switch (sortBy) {
            case "nombre-asc":
                result.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case "nombre-desc":
                result.sort((a, b) => b.nombre.localeCompare(a.nombre));
                break;
            case "inventario-asc":
                result.sort((a, b) => a.inventario - b.inventario);
                break;
            case "inventario-desc":
                result.sort((a, b) => b.inventario - a.inventario);
                break;
        }
        setFilteredProducts(result);
    }, [searchTerm, sortBy, products]);
    return (<div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>
      <FilterBar_1.default searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortBy={sortBy} setSortBy={setSortBy} showReset onReset={handleResetFilters} options={[
            { label: "Ordenar A-Z", value: "nombre-asc" },
            { label: "Ordenar Z-A", value: "nombre-desc" },
            { label: "Cantidad menor a mayor", value: "inventario-asc" },
            { label: "Cantidad mayor a menor", value: "inventario-desc" },
        ]}/>

      {/* Tabla de productos */}
      <table className="table is-fullwidth is-striped custom-table">
        <thead>
          <tr>
            <th className="has-text-weight-bold">ID</th>
            <th className="has-text-weight-bold">NOMBRE</th>
            <th className="has-text-weight-bold">DESCRIPCIÓN</th>
            <th className="has-text-centered has-text-weight-bold">INVENTARIO</th>
            <th className="has-text-weight-bold"></th>
            <th className="has-text-weight-bold"></th>
          </tr>
        </thead>
        <tbody>
          {/* Filtrar y mostrar filas de productos */}
          {filteredProducts.map((product) => (<ProductRow_1.default key={product.id} product={product} onUpdate={handleUpdate}/>))}
        </tbody>
      </table>
    </div>);
};
exports.default = ProductTable;
