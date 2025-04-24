import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
      <nav
        className="navbar px-4 py-2 is-fixed-top"
        style={{
          backgroundColor: "#6FA4D3", // Fondo azul claro
          fontFamily: "Jost, sans-serif",
          margin: 0, // Elimina márgenes
          padding: 0, // Elimina padding
      }}
    >
      <div className="navbar-brand">
        <span className="navbar-item has-text-white has-text-weight-semibold is-size-4">
          El Comedor
        </span>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <a
            href="/"
            className={`navbar-item has-text-white ${currentPath === "/" ? "has-text-weight-bold" : ""}`}
          >
            Dashboard
          </a>
          <a
            href="/products"
            className={`navbar-item has-text-white ${currentPath === "/products" ? "has-text-weight-bold" : ""}`}
          >
            Productos
          </a>
          <a
            href="/personas"
            className={`navbar-item has-text-white ${currentPath === "/personas" ? "has-text-weight-bold" : ""}`}
          >
            Personas
          </a>
          <a
            href="/donar"
            className={`navbar-item has-text-white ${currentPath === "/donar" ? "has-text-weight-bold" : ""}`}
          >
            Donar
          </a>

          <div className="navbar-item mr-4">
            <button
              className="button is-white is-outlined has-text-weight-semibold"
              onClick={() => console.log("Cerrar Sesión")}
            >
              Cerrar Sesión
            </button>
          </div>

          <div className="navbar-item">
            <button
              className="button is-white is-outlined"
              style={{
                border: "none",
                backgroundColor: "transparent",
                padding: "0.25rem 0.5rem",
              }}
              onClick={() => console.log("Perfil")}
            >
              <FontAwesomeIcon icon={faUser} className="has-text-white" size="lg" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
