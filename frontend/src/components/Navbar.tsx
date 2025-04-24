import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentPath = window.location.pathname;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleAdminClick = () => {
    navigate("/admin");
  };

  return (
    <nav
      className="navbar px-4 py-2 is-fixed-top"
      style={{
        backgroundColor: "#6FA4D3",
        fontFamily: "Jost, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="navbar-brand">
        <span className="navbar-item has-text-white has-text-weight-semibold is-size-4">
          El Comedor
        </span>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <a
            href="/dashboard"
            className={`navbar-item has-text-white ${currentPath === "/dashboard" ? "has-text-weight-bold" : ""}`}
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
              onClick={handleLogout}
              className="button logout-button is-white is-outlined has-text-weight-semibold"
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
              onClick={handleAdminClick}
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
