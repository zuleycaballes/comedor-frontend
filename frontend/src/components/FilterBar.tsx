import React from "react";

// Tipos de opciones de ordenamiento
export type SortOption =
  | "nombre-asc"
  | "nombre-desc"
  | "inventario-asc"
  | "inventario-desc"
  | "";

interface FilterBarProps {
  searchTerm: string; // Término de búsqueda
  setSearchTerm: (value: string) => void; 
  sortBy: SortOption; // Opción de ordenamiento seleccionada
  setSortBy: (value: SortOption) => void; 
  options: { label: string; value: SortOption }[]; // Opciones disponibles para ordenar
  showReset?: boolean; 
  onReset?: () => void; 
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  options,
  showReset = false,
  onReset,
}) => {
  return (
    <div
      style={{
        display: "flex", 
        gap: "1rem", 
        alignItems: "center", 
        marginBottom: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
        style={{ maxWidth: "250px" }}
      />

      <div className="select">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}>
          <option value="">Ordenar por</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {showReset && (
        <button className="button is-small" onClick={onReset}>
          Reiniciar
        </button>
      )}
    </div>
  );
};

export default FilterBar;