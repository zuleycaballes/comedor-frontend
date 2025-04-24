"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (<div style={{ marginBottom: "1rem" }}>
      <input type="text" placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{
            padding: "8px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
        }}/>
    </div>);
};
exports.default = SearchBar;
