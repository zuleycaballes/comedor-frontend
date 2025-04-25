"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilterBar = ({ searchTerm, setSearchTerm, sortBy, setSortBy, options, showReset = false, onReset, }) => {
    return (<div style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
        }}>
      <input type="text" placeholder="Buscar por nombre..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="input" style={{ maxWidth: "250px" }}/>

      <div className="select">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Ordenar por</option>
          {options.map((opt) => (<option key={opt.value} value={opt.value}>
              {opt.label}
            </option>))}
        </select>
      </div>

      {showReset && (<button className="button is-small" onClick={onReset}>
          Reiniciar
        </button>)}
    </div>);
};
exports.default = FilterBar;
