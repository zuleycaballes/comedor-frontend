import { useEffect, useState } from "react";
import { getAllPeople } from "../api/PersonAPI";
import PersonRow from "./PersonRow";
import { Person } from "my-types";
import FilterBar from "./FilterBar";

const PersonTable = () => {
  // Estados para manejar personas, filtros y ordenamiento
  const [people, setPeople] = useState<Person[]>([]);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"nombre-asc" | "nombre-desc" | "">("");

  // Obtener personas al montar el componente
  useEffect(() => {
    handleUpdate();
  }, []);

  const handleUpdate = async () => {
    // Obtener el ID del comedor desde localStorage
    const comedorId = Number(localStorage.getItem("comedorId"));
    // Obtener todas las personas y filtrar por comedor
    const updated = await getAllPeople();
    const filtered = updated.filter((p) => p.id_comedor === comedorId);
    setPeople(filtered);
    setFilteredPeople(filtered);
  };

  // Aplicar filtros y ordenamiento cuando cambian los estados
  useEffect(() => {
    let result = [...people];

    // Filtrar por término de búsqueda
    if (searchTerm.trim()) {
      result = result.filter((p) =>
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar por nombre ascendente o descendente
    if (sortBy === "nombre-asc") {
      result.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (sortBy === "nombre-desc") {
      result.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    setFilteredPeople(result);
  }, [searchTerm, sortBy, people]);

  return (
    <div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={(key: string) => setSortBy(key as "nombre-asc" | "nombre-desc" | "")}
        showReset={!!(searchTerm || sortBy)}
        onReset={() => {
          setSearchTerm("");
          setSortBy("");
        }}
        options={[
          { label: "Ordenar A-Z", value: "nombre-asc" },
          { label: "Ordenar Z-A", value: "nombre-desc" },
        ]}
      />

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
          {filteredPeople.map((person) => (
            <PersonRow key={person.id} person={person} onUpdate={handleUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonTable;