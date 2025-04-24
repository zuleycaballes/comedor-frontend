interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* Input para buscar, actualiza el estado al escribir */}
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchBar;