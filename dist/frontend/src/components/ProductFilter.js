"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const ProductFilter = ({ setSortBy }) => {
    const [isFilterOpen, setIsFilterOpen] = (0, react_1.useState)(false);
    const resetFilters = () => {
        setSortBy("");
    };
    return (<div style={{ position: "relative", marginBottom: "1rem" }}>
      {/* Botón para desplegar el filtro */}
      <button className="button is-small is-info" onClick={() => setIsFilterOpen(!isFilterOpen)} style={{ display: "flex", alignItems: "center" }}>
        <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faFilter} style={{ marginRight: "5px" }}/>
        Filtros
      </button>

      {/* Contenedor del filtro desplegable */}
      {isFilterOpen && (<div style={{
                position: "absolute",
                top: "40px",
                left: "0",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "1rem",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 10,
            }}>
          {/* Botones de ordenamiento */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <button onClick={() => setSortBy("nombre-asc")} className="button is-small is-info">
              Ordenar A-Z
            </button>
            <button onClick={() => setSortBy("nombre-desc")} className="button is-small is-info">
              Ordenar Z-A
            </button>
            <button onClick={() => setSortBy("inventario-asc")} className="button is-small is-info">
              Cantidad menor a mayor
            </button>
            <button onClick={() => setSortBy("inventario-desc")} className="button is-small is-info">
              Cantidad mayor a menor
            </button>
          </div>

          {/* Botón para reiniciar filtros */}
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <button onClick={resetFilters} className="button is-small is-danger">
              Reiniciar filtros
            </button>
          </div>
        </div>)}
    </div>);
};
exports.default = ProductFilter;
