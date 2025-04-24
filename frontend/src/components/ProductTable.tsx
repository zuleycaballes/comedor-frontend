import { useEffect, useState } from "react";
import { Product } from "my-types";
import { getAllProducts } from "../api/ProductAPI";
import ProductRow from "./ProductRow";
import FilterBar, { SortOption } from "./FilterBar";

const ProductTable = () => {
  // Estados para manejar productos, filtros y ordenamiento
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("");

  // Cargar productos al montar el componente
  useEffect(() => {
    handleUpdate();
  }, []);

  // Obtener productos desde la API y filtrarlos por comedor
  const handleUpdate = async () => {
    const comedorId = Number(localStorage.getItem("comedorId"));
    const updated = await getAllProducts();
    const filtered = updated.filter((p) => p.id_comedor === comedorId);
    setProducts(filtered);
    setFilteredProducts(filtered);
  };

  // Reiniciar filtros y ordenamiento
  const handleResetFilters = () => {
    setSearchTerm("");
    setSortBy("");
    setFilteredProducts(products);
  };

  // Aplicar filtros y ordenamiento cuando cambian los estados relacionados
  useEffect(() => {
    let result = [...products];

    // Filtrar por término de búsqueda
    if (searchTerm.trim() !== "") {
      result = result.filter((p) =>
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
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

  return (
    <div style={{ maxWidth: "90%", margin: "0 auto", fontFamily: "Jost, sans-serif" }}>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showReset
        onReset={handleResetFilters}
        options={[
          { label: "Ordenar A-Z", value: "nombre-asc" },
          { label: "Ordenar Z-A", value: "nombre-desc" },
          { label: "Cantidad menor a mayor", value: "inventario-asc" },
          { label: "Cantidad mayor a menor", value: "inventario-desc" },
        ]}
      />

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
          {filteredProducts.map((product) => (
            <ProductRow key={product.id} product={product} onUpdate={handleUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;